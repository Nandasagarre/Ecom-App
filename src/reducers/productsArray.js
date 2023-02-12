export function ProductReducers(state = [], action) {
    //console.log('called reducer');
    switch (action.type) {
        case 'Add_Products':
            //console.log('got fine till here other way around', state)
            return action.parray;
        case 'Add_NEW_PRODUCT':
            console.log('got fine till here', state, action.NewProduct)
            //state.push(action.NewProduct);
            state.splice(0, 0, action.NewProduct);
            return state;
        case 'DELETE_ITEM':
            state = state.filter(p =>  p.ptitle !== action.id );
            return state;
        case 'SAVE_EDITED':
            let idx = state.findIndex(obj => obj.ptitle === action.id);
            state[idx].ptitle = action.values.ptitle;
            state[idx].pprice = action.values.pprice;
            state[idx].prateing = action.values.prateing;
            return state;

        default:
            return state;
    }
}

