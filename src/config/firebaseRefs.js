import { firestore } from './firebaseConfig';

//get ref to all clients
export const clientsRef = firestore.collection('clients');
