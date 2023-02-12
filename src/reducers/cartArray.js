export default function CartArray(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            //state.splice(0, 0, action.NewCartItem);
            state = [action.NewCartItem, ...state]
            return state;
        case 'DELETE_TO_CART':
            return state.filter(item => { return item[0].ptitle !== action.id })
        default:
            return state;
    }
}