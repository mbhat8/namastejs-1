import { CDN_URL } from "../../utils/constants";

const RestauarantCard=(props)=>{
    const {resData}=props;
    // console.log(resData)

const {name,cloudinaryImageId,cuisines,costForTwo,sla,avgRating}=resData?.info;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0ff"}}>
            <h3>{name}</h3>
            <img className="res-image"
        src={CDN_URL
           +
          cloudinaryImageId
        }
      />
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo} Rs</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{avgRating}</h4>
        </div>
        
    )
}
export default RestauarantCard;