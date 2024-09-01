import React from 'react';
import './App.css';
//import { Signup } from './pages/register';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Shop from './pages/home';
import ProductList from './pages/shop';
import PasswordReset from './pages/resetpassword';
import Profile from './pages/profile';
import DeleteAccount from './pages/deleteacc';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>  
        <>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={ <Shop/>}></Route>
          <Route path='/store' element={<ProductList/>}></Route>
          <Route path='/forget-password' element={<PasswordReset/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/deleteaccount' element={<DeleteAccount/>}></Route>
        </>
    
        <>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate to="/login" />} />
        </>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
//put this code in order to let only the authenticated user to access the appli
/* { user.currentUser?
    <BrowserRouter>
    <Routes>
   <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

    
    </Routes>
    </BrowserRouter>: 
    <Login/> 
   } */


   /*  <BrowserRouter>
    <Routes>  
        <>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
         
          </>
    
          <>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to="/login" />} />
          </>
        
      </Routes>
    </BrowserRouter> */



    /*     <BrowserRouter>
    <Routes>  
        <>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
         
          </>
    
          <>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to="/login" />} />
          </>
        
      </Routes>
    </BrowserRouter> */