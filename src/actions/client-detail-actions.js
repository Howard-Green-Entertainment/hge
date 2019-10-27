export const CREATE_CLIENT = 'CREATE_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';

export const createClient = (client) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_CLIENT', client });
    }
};

export const deleteClient = id => ({
    type: DELETE_CLIENT,
    payload: id
});
