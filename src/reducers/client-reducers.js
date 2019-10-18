import { CREATE_CLIENT, DELETE_CLIENT } from '../actions/client-detail-actions';
import { stat } from 'fs';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CLIENT:
            return [...state, { title: action.payload.title, bio: action.payload.bio }];
        case DELETE_CLIENT:
            return [
                ...state.slice(0, action.payload),
                ...stat.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
