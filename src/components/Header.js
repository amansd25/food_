import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";



const loggedInUser =()=>{
  //Api call to check authentication

  return false;
}


const HeaderComponent =()=>{
  const[isLoggedIn, setIsLoggedIn] =useState(false);
    return(
      <div className="flex justify-between bg-purple-200 shadow-lg">
          <Title/> 
       <div className='nav-items'>
        <ul className="flex py-10">
          <li className="px-3">
            <Link to ="/">Home🏠</Link>
            </li>
            <li className="px-3">
            <Link to="/about">
          About🙋‍♂️
          </Link>
            </li>
          
          <li className="px-3">
          <Link to ="/contact">contactUs📱</Link>
          </li>
        
          <li className="px-3">
          <Link to ="/cart">Cart🛒</Link>
          </li>
        </ul>
       </div>
       {isLoggedIn ?(
        <button  onClick={() => setIsLoggedIn(false)}>LogOut</button>
        ):(
          <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
        )}
      </div>
    );
  };
export default HeaderComponent;  