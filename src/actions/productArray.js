
export function handleSave(EditId) {
    
    return function (dispatch) {
        let item = document.getElementsByClassName(EditId);
        for (let i = 0; i < 3; i++) {
            item[i].setAttribute("contentEditable", "false");
            item[i].style.backgroundColor = "#82AAE3";
        }
        let values = {
            ptitle: item[0].innerHTML,
            pprice: item[1].innerHTML,
            prateing: item[2].innerHTML
        }
        console.log('values', values);
        dispatch(dispatchSave(EditId, values));
    }

}

export function dispatchSave(id, values) {
    return {
        type: 'SAVE_EDITED',
        id: id,
        values: values
        }
}

export function DeleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id:id
        }
}


export function handleIt(values) {
    //console.log('logginf values', values);
    return {
        type: 'Add_NEW_PRODUCT',
        NewProduct: values
    }
    
    
}



export function AddProducts() {
    return async function (dispatch) {
        const url = 'https://my-json-server.typicode.com/Nandasagarre/mock/allproducts';
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                dispatch(dispatchArray(res));
            })
    }
}

export function dispatchArray(parray) {
    return {
        type: 'Add_Products',
        parray: parray
    }
}


