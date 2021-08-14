//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header'
 import UpdateProduct from './UpdateProduct.js'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Ecomm Project</h1>
      <BrowserRouter>
      <Header /> 
      <UpdateProduct />
           <button>simple button</button>
      <Button>Bootstrap</Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
