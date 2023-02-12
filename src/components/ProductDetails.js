import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { AddToCart } from '../actions/cartArray';

export default function ProductDeatils() {
    const dispatch = useDispatch();
    const { id } = useParams();
    //console.log('id', id);
    const items = useSelector((state) => { return state.ProductReducers })
    const item = items.filter(p => { return p.ptitle === id })
    console.log('here',item);
    return (
        <div className="wrapper pro">
            <div className="item mb-3">
                <img src={item[0].plink} alt={item[0].plink} />
                <div className="d-inline position-absolute desc-holder">
                    <div><span style={{ fontWeight: 'bold' }}> Title: </span> {item[0].ptitle} </div>
                    <div><span style={{ fontWeight: 'bold' }}> Desc: </span> {item[0].pdesc}</div>
                    <div><span style={{ fontWeight: 'bold' }}> Price: </span> {item[0].pprice}</div>
                    <div><span style={{ fontWeight: 'bold' }}> Rating: </span> {item[0].prateing}/5</div>
                </div>
                
                <button className="buttons btn btn-light" onClick={() => { dispatch(AddToCart(item)) } }>Add to Cart</button>
                
            </div>

            <Link to="/CartView">
                <button className="btn btn-light mx-2">See Cart</button>
            </Link>
            <Link to="/Showproducts">
                <button className="btn btn-light">Back</button>
            </Link>
        </div>
    );
}

