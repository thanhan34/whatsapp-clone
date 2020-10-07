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