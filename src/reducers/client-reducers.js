import { CREATE_CLIENT } from '../actions/client-detail-actions';

const initialState = {
    clients: [
       {id: '1', name: 'Carol Channing', bio: 'A very funny lady' }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CLIENT:
            return state;
        // case CREATE_CLIENT_ERROR:
        //     return state;
        // case DELETE_CLIENT:
        //     return [
        //         ...state.slice(0, action.payload),
        //         ...state.slice(action.payload + 1)
        //     ];
        default:
            return state;
    }
}
