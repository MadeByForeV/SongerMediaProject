import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"
import { cartItems } from "../initialValues/cartItems"

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let song = state.cartItems.find(c => c.song.id === payload.id)
            if (song) {
                song.quantity++
                return {
                    ...state
                }
            } else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, { quantity: 1, song: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.song.id !== payload.id)
            }

        default:
            return state
    }
}