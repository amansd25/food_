import React from 'react';
import HeaderComponent from './components/Header';
import Body from './components/body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import  ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ResturantMenu from './components/RestaurantMenu';


const AppLayout = ()=>{
    return(
        <>
        <HeaderComponent/>
        <Outlet/>        
        <Footer/>
        </>
    );
};    

const appRouter = createBrowserRouter([
    
    {
     path:"/",
     element:<AppLayout/>,
     errorElement:<Error/>,
     children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/Contact",
            element:<Contact/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/restaurant/:resId",
            element:<ResturantMenu/>
        },
     ]

    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
