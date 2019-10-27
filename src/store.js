import { createStore, applyMiddleware, compose } from 'redux';
import clientReducer from './reducers/client-reducers';
import thunk from 'redux-thunk';

export default createStore(
    clientReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
