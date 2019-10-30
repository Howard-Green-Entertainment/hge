import { clientsRef } from '../config/firebaseRefs';

//gets all clients 




//adds client to db
export const addClient = async client => {
    try {
        const clientRef = await clientsRef.add(client);
        return clientRef;
    } catch(error) {
        console.log('failed to add client', error);
    }
}
