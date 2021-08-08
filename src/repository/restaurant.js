const fs = require("firebase-admin");

const serviceAccount = require("../../rumba_private_key.json");

fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });

const db = fs.firestore();
