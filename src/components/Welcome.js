import React from 'react';
import { Link } from 'react-router-dom';
export default function Welcome() {
    return (
        <>
            <Link to="/ShowProducts">
                <button className="btn color">Please Click Here</button>
            </Link>
           
        </>
        
        )
}