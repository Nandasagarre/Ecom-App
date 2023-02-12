export function AddToCart(item) {
    return {
        type: 'ADD_TO_CART',
        NewCartItem: item
        }
}

export function DeleteToCart(id){
    return {
        type: 'DELETE_TO_CART',
        id: id
        }
}