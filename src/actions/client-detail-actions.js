export const CREATE_CLIENT = 'CREATE_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';

export const createClient = (name, bio) => ({
    type: CREATE_CLIENT,
    payload: { name, bio }
});

export const deleteClient = id => ({
    type: DELETE_CLIENT,
    payload: id
});
