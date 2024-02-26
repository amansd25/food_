import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const MenuChart =() =>{

    const {cards} = useParams();
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        // Make a GET request to the Swiggy API endpoint
        fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5937003&lng=85.1546589&restaurantId=152335')
          .then(response => response.json())
          .then(data => {
            const {cards} = data;
            const menuItems = cards
              .filter(card => card.groupedCard && card.groupedCard.cardGroupMap.REGULAR)
              .map(card => card.groupedCard.cardGroupMap.REGULAR.cards)
              .flat()
              .map(item => item.card.info);
    
            setMenuData(menuItems);
          });
      }, []);
    
      return  (
        <div>
          <h1>Menu Chart</h1>
          <ul>
            {menuData.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default MenuChart;