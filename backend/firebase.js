const admin = require("firebase-admin");
const path = require("path");

// Correctly load the service account key
const serviceAccount = require(path.resolve(__dirname, "./config/serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://women-empowering-b45b5-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

module.exports = {admin, db };