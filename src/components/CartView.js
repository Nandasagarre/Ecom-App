import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { DeleteToCart } from '../actions/cartArray'
import { Link } from 'react-router-dom';

export default function CartView() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.CartArray);
    console.log('cart', cart);
    return (
        <div>
            <div className="wrapper">
                {
                    cart.map((p) => (

                        <div className='mx-auto mb-3 item' key={p.ptitle} id={p.ptitle}>
                            <div className="item">
                                
                            <img src={p[0].plink} alt={p[0].plink} />
                                <div className="d-inline position-absolute holder">
                                <div>{p[0].ptitle}</div>
                                <div>{p[0].pprice}</div>
                                <div>{p[0].prateing}</div>
                                    </div>
                                </div>
                            <button className="buttons btn btn-light" onClick={() => { alert('All similar products will be deleted..'); dispatch(DeleteToCart(p[0].ptitle)) }}><i className="fa-solid fa-trash"></i></button>
                        </div>

                    ))}

            </div>
            <Link to="/Showproducts">
                <button class="btn btn-light">Go back</button>
            </Link>
        </div>
        )
}