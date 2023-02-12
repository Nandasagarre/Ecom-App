import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from 'react-router-dom';

import Nav from './components/Nav'
import AddProducts from './components/AddProduct';
import Showproducts from './components/Showproducts';
import ProductDeatils from './components/ProductDetails';
import CartView from './components/CartView';
import Welcome from './components/Welcome'

function App() {
    return (
        <>
       
        <Router>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Welcome/>}></Route>
                    <Route exact path='/addproduct' element={< AddProducts />}></Route>
                    <Route exact path='/showproducts' element={< Showproducts />}></Route>
                    <Route exact path='/productdetails/:id' element={< ProductDeatils />}></Route>
                    <Route exact path='/CartView' element={< CartView />}></Route>
                </Routes>
        </Router>
        </>
  );
}

export default App;
