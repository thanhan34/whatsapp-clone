export const initialState = {
    basket: [],
    user: null,
};
export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
    SET_USER: "SET_USER"
};
export const getBasetketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case actionTypes.REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cant remove product(id:${action.id}) as its not exist`)
            }
            return { ...state, basket: newBasket, }
            break;
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};
export default reducer;