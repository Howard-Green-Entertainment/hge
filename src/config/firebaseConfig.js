import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            databaseURL: process.env.DB_URL,
            projectId: 'howard-green-ent',
            storageBucket: 'howard-green-ent.appspot.com',
            messagingSenderId: process.env.MESSAGE_SENDER_ID,
            appId: process.env.APP_ID,
            measurementId: process.env.MEASUREMENT_IDa
        };

export const app = firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
