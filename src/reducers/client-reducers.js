import { CREATE_CLIENT, DELETE_CLIENT } from '../actions/client-detail-actions';
import { stat } from 'fs';

const initialState = {
    clients: [
       {id: '1', name: 'Carol Channing', bio: 'A very funny lady' }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CLIENT:
            return console.log('created client', action.client);

        case DELETE_CLIENT:
            return [
                ...state.slice(0, action.payload),
                ...stat.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
