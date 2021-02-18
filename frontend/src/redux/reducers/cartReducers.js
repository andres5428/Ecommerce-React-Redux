import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((currentItem) => currentItem.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((currentItem) => currentItem.product === existItem.product ? item : currentItem)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter((currentItem)=> currentItem.product !== action.payload)
            }
        default:
            return state;
    }
}