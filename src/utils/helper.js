export function filterData(searchText, restaurant) {
    const filterData=   restaurant.filter((restaurant)=> 
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
  
      return filterData;
  } 