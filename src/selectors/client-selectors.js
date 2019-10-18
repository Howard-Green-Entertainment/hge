export const getAllClients = state => {
    return state.clients.map((client, id) => ({
        ...client,
        id
    }));
};

// export const getClientById = (state, id) => ({
//     return getAll
// })
