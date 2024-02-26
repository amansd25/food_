import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimer from "./shimer";

const ResturantMenu = () =>{
    //how to read a dynamic URL parms
    const {resId} = useParams();
    
    //const [restaurant, setRestaurant] = useState({});
    const restaurant = useRestaurant(resId);


     // useEffect(() =>{
     //   getRestaurantInfo();
     // },[]);
//
     //async function getRestaurantInfo (){
     //   const data = await fetch(
     //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5937003&lng=85.1546589&restaurantId="+resId
     //     );
     //   const json = await data.json();
     // console.log(json.data);
     //   setRestaurant(json.data); 
    
     

   // return (Object.keys(restaurant).length === 0)?(<h2>Loading Menu!!!</h2>):(
    return !restaurant?(
        <Shimer/>
    ):(
        <div className="flex">
         <div>
         <h1>Restaurant id: {resId}</h1>
          <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
          <img src={IMG_CDN_URL + (restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId)}/>

             <h3>Area:   {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
             <h3>City:   {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
             <h3>rating: {restaurant?.cards[0]?.card?.card?.info?.avgRating} Stars⭐</h3>
             <h4>Price:  {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
         </div>
         <div className="p-5">
          <h1>Menu</h1>
          {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((menus) => {
            return (
              <div className="menu-card">
            <h2>{menus.card.info.name}</h2>
            {/* <h3>{menus?.card?.info?.id}</h3> */}
            <h3>Price: {menus?.card?.info?.price} paise</h3>
            <img  src= {IMG_CDN_URL + (menus?.card?.info?.imageId)} />
            </div>
            )
          })}
        
         </div>
       
         
        </div>
    );  
  };
export default ResturantMenu;
