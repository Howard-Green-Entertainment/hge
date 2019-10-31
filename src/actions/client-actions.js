import { clientsRef } from '../config/firebaseRefs';

//gets all clients 
export const getClient = async clientId => {
    try {
        const client = await clientsRef.doc(clientId).get();
        console.log('client action', client.data());
        return client.data();
    } catch(error) {
        console.log('client error', error);
    } 
}



//adds client to db
export const addClient = async client => {
    try {
        const clientRef = await clientsRef.add(client);
        console.log('clientRef', clientRef);
        return clientRef;
    } catch(error) {
        console.log('failed to add client', error);
    }
}
