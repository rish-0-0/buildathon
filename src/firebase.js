import admin from 'firebase-admin';

let serviceAccount;
if (process.env.NODE_ENV === 'development') {
	serviceAccount = require('../config');
} else {
	let {
		FIREBASE_PRIVATE_KEY
    } = process.env;
    
    serviceAccount = JSON.parse(FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'));
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://buildathon-4ec79.firebaseio.com"
});

const auth = admin.auth;
const db = admin.firestore;


export { auth, db };
