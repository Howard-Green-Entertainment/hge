import firebase from '../config/firebaseConfig';


export const CREATE_CLIENT = 'CREATE_CLIENT';
// export const DELETE_CLIENT = 'DELETE_CLIENT';
export const CREATE_CLIENT_ERROR = 'CREATE_CLIENT_ERROR';

export const createClient = (client) => {
    return (dispatch, getState) => {
        console.log('clients collections', firebase.firestore().collections('clients'));
        firebase.collections('clients').add({ client })
        .then(() => {
            dispatch({ type: 'CREATE_CLIENT', client });
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_CLIENT_ERROR', err });
        })
    }
};

// export const deleteClient = id => ({
//     type: DELETE_CLIENT,
//     payload: id
// });
