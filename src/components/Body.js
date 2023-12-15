import RestauarantCard from "./RestauarantCard";
import restaurantList from "../../utils/mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listOfRes,setlistOfRes]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData=async()=>{
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setlistOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    if(listOfRes.length===0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <button className="filter-btn" 
            onClick={()=>{
                    const filteredList=listOfRes.filter(
                        (res)=>res.info.avgRating>4.2);
                        setlistOfRes(filteredList)
                        // console.log(filteredList)
                    }}
            >
                Top rated Restaurant</button>
            <div className="res-container">
            {
                listOfRes.map((resturant)=>(<RestauarantCard key={resturant.info.id}resData={resturant}/>))
            }
            </div>
        </div>
    )
}
export default Body;