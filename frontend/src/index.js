// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { CartProvider } from './Context/CartContext';
// import { UserAuthProvider } from './Context/UserAuthContext';
// import { ToastContainer } from 'react-toastify';
// import { SearchProvider } from './Context/SearchContext';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <CartProvider>
//         <UserAuthProvider>
//           <SearchProvider>
//             <App />
//           </SearchProvider>
//         </UserAuthProvider>
//       </CartProvider>
//       <ToastContainer />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import { UserAuthProvider } from './Context/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import { SearchProvider } from './Context/SearchContext';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <UserAuthProvider>
      <SearchProvider>
      <CartProvider>
    <BrowserRouter> 
    {/* <ChakraProvider> */}
    <App />
   <ToastContainer/>
   
    <ToastContainer/>
    </BrowserRouter>  
    </CartProvider>
      </SearchProvider>
    </UserAuthProvider>  
  </React.StrictMode>
);      

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
