import RestauarantCard from "./RestauarantCard";
import restaurantList from "../../utils/mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listOfRestaurant,setlistOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setsearchText]=useState("")

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      
        setlistOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"className="search-box" value={searchText} onChange={(e)=>{
                        
                        setsearchText(e.target.value)
                    
                    }}/>
                        <button onClick={()=>{
                            const filteredRestaurant= listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            // console.log(filteredList)
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                        >Search
                        </button>
                </div>
            <button className="filter-btn" 
            onClick={()=>{
                    const filteredList=listOfRestaurant.filter(
                        (res)=>res.info.avgRating>4.5);
                        setlistOfRestaurant(filteredList)
                        // console.log(filteredList)
                    }}
            >
                Top rated Restaurant
            </button>
            </div>
            <div className="res-container">
            {
            filteredRestaurant.map((resturant)=>(<RestauarantCard key={resturant.info.id}resData={resturant}/>))
            }
            </div>
        </div>
    )
}
export default Body;