//import logo from './logo.svg';
import './App.css';
import Header from './Header'
 import UpdateProduct from './UpdateProduct.js'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'


function App() {
  return (
    <div className="App">
      <h1>Ecomm Project</h1>
      <BrowserRouter>
      <Header />
   <Route path="/login">
     <Login />
        </Route>  
        <Route path="/register">
     <Register />
        </Route>  
        <Route path="/add">
     <AddProduct />
        </Route>  
        <Route path="/update">
     <UpdateProduct />
        </Route>  
      </BrowserRouter>
    </div>
  );
}

export default App;
