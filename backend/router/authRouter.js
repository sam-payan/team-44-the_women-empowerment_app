const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebase');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS 
    }
});

// Generate OTP function
const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); 
};

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Generate a 4-digit OTP
        const otp = generateOtp();

        const userData = {
            name,
            email,
            password,
            phone
        };

        const userRef = await db.collection('users').add(userData);
        const token = jwt.sign({ userId: userRef.id, email }, SECRET_KEY, { expiresIn: "7d" });

        // Send OTP via email
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Your OTP for Registration',
            text: `Your OTP for verification is: ${otp}. It expires in 5 minutes.`
        };

        await transporter.sendMail(mailOptions); // Wait for email to send before responding

        return res.status(200).json({
            message: "User registered successfully. OTP sent to email.",
            user: { id: userRef.id, ...userData },
            token, 
            status: 200,
            otp
        });

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.collection('users').where('email', '==', email).get();

        if (user.docs.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }

        const userData = user.docs[0].data();

        if (userData.password !== password) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.docs[0].id, email }, SECRET_KEY, { expiresIn: "7d" });
        res.status(200).json({ token, user: { id: user.docs[0].id, ...userData }, status: 200 });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(400).json({ error: error.message });
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(400).json({ error: error.message });
    }
});

router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ error: "Missing email or OTP" });
        }

        // Fetch user data from Firestore
        const userSnapshot = await db.collection('users').where('email', '==', email).get();

        if (userSnapshot.empty) {
            return res.status(400).json({ error: "User not found" });
        }

        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();

        // Check OTP validity
        if (userData.otp !== otp) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        // Remove OTP from the database after verification
        await db.collection('volunteerProfile').doc(userDoc.id).update({ otp: null, status: "verified" });

        // Generate JWT token
        const token = jwt.sign({ userId: userDoc.id, email }, SECRET_KEY, { expiresIn: "7d" });

        return res.status(200).json({ message: "OTP verified successfully", token });

    } catch (error) {
        console.error("OTP Verification Error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;