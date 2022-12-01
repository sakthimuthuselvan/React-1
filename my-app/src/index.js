
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./page/home/Home";

// import { Statecontext } from './page/home/redux/context/Context';
// import { initalvalue,statereducer } from './page/home/redux/context/Reducer';

import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Details from './page/home/details/Details';


const Overall = () => {

  return (

    <div>

<BrowserRouter>

<Routes>

  <Route path='/' element={<Home />}></Route>
  <Route path='detail' element={<Details />}></Route>
  <Route path="*" element={<Navigate to={"/"} />}></Route>

</Routes>

</BrowserRouter>


    </div>

  )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Overall />

);



