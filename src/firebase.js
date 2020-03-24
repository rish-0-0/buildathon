import admin from 'firebase-admin';

let serviceAccount;
if (process.env.NODE_ENV === 'development') {
	serviceAccount = require('../config');
} else {
	let {
		private_key_id,
		project_id,
		type,
		private_key,
		client_email,
		client_id,
		auth_uri,
		token_uri,
		auth_provider_x509_cert_url,
		client_x509_cert_url,
    } = process.env;
    
    serviceAccount = {
        private_key_id,
		project_id,
		type,
		private_key,
		client_email,
		client_id,
		auth_uri,
		token_uri,
		auth_provider_x509_cert_url,
		client_x509_cert_url,
    };
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://buildathon-4ec79.firebaseio.com"
});

const auth = admin.auth;
const db = admin.firestore;


export { auth, db };
