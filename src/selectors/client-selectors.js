export const getAllClients = state => state.clients;

export const getClientById = (state, firstName, lastName) => {
    return getAllClients(state)[state.clients.findIndex(client => {
        client.clientFirstname === firstName && client.clientLastname === lastName})];
}
