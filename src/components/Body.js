import RestauarantCard from "./RestauarantCard";
import restaurantList from "../../utils/mockdata";
const Body=()=>{
    return (
        <div className="body">
            <button className="filter-btn">Top rated Restaurant</button>
            <div className="res-container">
            {
                restaurantList.map((resturant)=>(<RestauarantCard key={resturant.data.id}resData={resturant}/>))
            }
            </div>
        </div>
    )
}
export default Body;