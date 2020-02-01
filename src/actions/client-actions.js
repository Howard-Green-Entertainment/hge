import { clientsRef } from '../config/firebaseRefs';

//gets single client
export const getClient = async (firstName, lastName) => {
    try {
        const client = await clientsRef.where('clientFirstName', '==', firstName).where('clientLastName', '==', lastName)
        .get()
        .then(function(querySnapshot) {
           return querySnapshot.docs[0].data()
        });
        console.log('client', client);
        return client;
    } catch(error) {
        console.log('client error', error);
    } 
}

//gets all clients
export const getAllClients = async () => {
    try {
        const clients = await clientsRef.get();
        const clientsList = clients.docs.map(doc => {
            const client = {
                id: doc.id,
                ...doc.data()
            };
            return client;
        });
        return clientsList; 
    } catch(error) {
        console.log('clients error', error);
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
