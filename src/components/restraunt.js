import { RES_URL } from "../utility/constants";
const RestrauntCard = ({resData})=>{
  const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId} = resData?.info
 
 
  return(
    <div className="res-card">
    <img className="res-logo" src={RES_URL+cloudinaryImageId}></img>
    <h3>{name}</h3>
    <p>{cuisines.join(",")}</p>
    <h4>{avgRating}</h4>
    <h4>{deliveryTime} Minutes</h4>
    </div>
  )
}
export default RestrauntCard;