import { createStore } from 'redux';
import clientReducer from './reducers/client-reducers';

export default createStore(
    clientReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
