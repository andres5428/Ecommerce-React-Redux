import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Import reducers
 */
import { cartReducer } from './reducers/cartReducers';
import { getProductsDetailsReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;