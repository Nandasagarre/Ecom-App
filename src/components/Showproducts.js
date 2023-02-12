import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { AddProducts, DeleteItem, handleSave } from '../actions/productArray';

export default function ShowProducts() {
    
    const [sortByPrice, SetsortByPrice] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    //let ConditionalLink = isEdit ? Link : React.DOM.div({ className: 'foo' });
    const [EditId, setEditId] = useState("");
    const dispatch =  useDispatch();
    const AllProducts = useSelector(state => { console.log('loged state', state); return state.ProductReducers; });
  

    function ConditionalLink({ children, condition, ...props }) {
        return !!condition && props.to ? <>{children}</> : <Link {...props}>{children}</Link>;
    }

   

    useEffect(() => {

        
        if (sortByPrice) {
            AllProducts.sort((a, b) => {
                return b.pprice - a.pprice
            })
        }
        else {
            AllProducts.sort((a, b) => {
              
                return a.pprice - b.pprice
            })
        }


        if (isEdit) {
            console.log('gotch ediatble', EditId)
            let item = document.getElementsByClassName(EditId);
            for (let i = 0; i < 3 && typeof item[i] !== 'undefined'; i++) {
                item[i].setAttribute("contentEditable", "true");
                item[i].style.backgroundColor = "#EAFDFC";
            }
        }   
        
    })

    
    
    


    return (
        <div>
            <button onClick={() => { SetsortByPrice(!sortByPrice) }} class="btn color position-relative">Sort
                <span className={sortByPrice ? "visually-hidden" : ""}>
                    <span className="rag position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"> x <span className="visually-hidden">unread messages</span></span>
                </span>

            </button>

            <div><button className="btn color mt-2" onClick={() => dispatch(AddProducts())}>Show All Products</button></div>


            <div className="wrapper">

                <div>
                    {
                        AllProducts?.map((p) => (
                            <div className='m-3 item'>
                                <div key={p.ptitle} id={p.ptitle}>
                                    <div className="main-holder">
                                        <ConditionalLink to={`/productdetails/${p.ptitle}`} condition={isEdit}>
                                            <img src={p.plink} alt={`${p.title}`} className="d-inline" />
                                            <div className="d-inline position-absolute holder">
                                                <div className={`${p.ptitle}`} > {p.ptitle}</div>
                                                <div className={`${p.ptitle}`}> {p.pprice}</div>
                                                <div className={`${p.ptitle}`}> {`${p.prateing}`} </div>
                                            </div>
                                        </ConditionalLink>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={() => { alert('Sure? of deleting..'); dispatch(DeleteItem(p.ptitle)) }}><i className="fa-solid fa-trash"></i></button>
                                        <button onClick={() => { alert('Sure? of Editing..'); setIsEdit(!isEdit); setEditId(p.ptitle) }}><i className="fa-solid fa-pencil"></i></button>
                                        <button onClick={() => { alert('Sure? of saving..'); dispatch(handleSave(p.ptitle)); setIsEdit(!isEdit); }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
        )

    
}