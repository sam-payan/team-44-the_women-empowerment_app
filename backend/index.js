const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors()); 
app.use(bodyParser.json()); 

// importing all routes\
const authRoutes = require('./router/authRouter');
const helpRoutes = require('./router/help');
const otpRoutes = require('./router/otp');

// adding all routes
app.use('/api', authRoutes);
app.use('/api', helpRoutes);
app.use('/api', otpRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Firebase Firestore + Node.js API!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});