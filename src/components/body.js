// import {restaurantList} from "../contants";
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimer from './shimer';
import{Link} from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body=()=>{
    const [allrestaurants, setAllRestaurants] = useState([]);
    const [filterdRestaurants, setFilterdRestaurants]= useState([]);
    const [searchText, setSearchText]=useState("");

    useEffect(() =>{
       getRestaurants();
      // console.log("i am beast");

    }, []);
   
    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterdRestaurants (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json);
      // console.log(json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      
  }
  const isOnline= useOnline();
  if(!isOnline){
    return <h1> 🔴 Seems that you are Offline Check your Internet Connection</h1>
  }
   console.log("render of body.js");

    //not render component (Early rendering)
    if(!allrestaurants) return null;

    return allrestaurants?.length ===0 ?(
    <Shimer/>
    ):(
        <>
      <div className="search-container p-5 bg-purple-200 m-4">
        <input
         type="text"
        className="search-input"
        placeholder="search"
        value ={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
        />
        <button
        className="search-btn p-2 m-2 bg-purple-950 hover:bg-emerald-400 text-white rounded-md"
         onClick={()=>{
            const data = filterData(searchText, allrestaurants);
            setFilterdRestaurants(data);
        }} >
            Search
            </button>
       </div>
        <div className=" flex flex-wrap ">
            {filterdRestaurants.map((restaurant)=>{
                return(
                  <Link 
                  to = {"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}>
                  <RestaurantCard {...restaurant.info} />
                  </Link>
                );
            })}
            
        </div>
      </>
    );
  };
  export default Body;
