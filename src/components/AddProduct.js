import React from 'react';
import ContactForm from './Addproductform';
import { handleIt } from '../actions/productArray';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { handleAddProductPost } from '../actions/productArray';
export default function AddProducts() {

    const dispatch = useDispatch();
    const formdata = useSelector(state => console.log('form data state', state))
    return (
        <>
            <ContactForm onSubmit={(values) => dispatch(handleIt(values))} />
            <Link to="/showproducts">
                <button>Go Back</button>
            </Link>
        </>
        
       
        )
}