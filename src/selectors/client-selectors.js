export const getAllClients = state => state.clients;

export const getClientById = (state, id) => {
    return getAllClients(state)[state.clients.findIndex(client => client.id === id)];
}
