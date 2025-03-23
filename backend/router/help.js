const express = require('express');
const router = express.Router();
const { db } = require('../firebase');

router.get('/help', async (req, res) => {
    try {
        const snapshot = await db.collection('sos_emergancy_location').get();
        let help = [];
        snapshot.forEach(doc => help.push({ id: doc.id, ...doc.data() }));
        res.status(200).json(help);
    } catch (error) {
        console.error("Error fetching help:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/help/create', async (req, res) => {
    try {
        console.log("Received Data:", JSON.stringify(req.body, null, 2));

        const { date, latitude, longitude, location, message, user_id, status, updated_at } = req.body;

        if (!latitude || !longitude || !user_id) {
            return res.status(400).json({ message: "Missing required fields", status: 400 });
        }

        const data = {
            date: date || new Date().toISOString().split("T")[0], 
            latitude: latitude || 0,
            longitude: longitude || 0,
            location: location || "",  // 🔥 Ensure "location" is never undefined
            message: message || "No message provided",
            user_id: user_id,
            status: status || "pending",
            updated_at: updated_at || new Date().toISOString(),
        };

        const docRef = db.collection('sos_emergancy_location').doc();
        await docRef.set(data);

        res.status(200).json({ message: "Help status updated successfully", status: 200 });
    } catch (error) {
        console.error("❌ Firestore Error:", error.message);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


// update help status
router.put('/help/update', async (req, res) => {
    try {
        console.log("Received update request:", req.body);

        const { id, status } = req.body;

        if (!id || !status) {
            return res.status(400).json({ message: "Missing required fields: id and status" });
        }

        const docRef = db.collection('sos_emergancy_location').doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            // console.error(Help request with ID ${id} not found.);
            return res.status(404).json({ message: "Help request not found" });
        }
        await docRef.set(
            {
                status,
                updated_at: new Date().toISOString(),
            },
            { merge: true }
        );

        res.status(200).json({ message: "Help status updated successfully" });
    } catch (error) {
        console.error("Error updating help status:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;