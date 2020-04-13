import admin from 'firebase-admin';

let serviceAccount;
if (process.env.NODE_ENV === 'development') {
	serviceAccount = require('../config');
} else {
	let {
		project_id,
		client_email,
		private_key,
    } = process.env;
    serviceAccount = {
		project_id,
		client_email,
		private_keym
	};
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://buildathon-4ec79.firebaseio.com"
});

const auth = admin.auth;
const db = admin.firestore;


export { auth, db };
