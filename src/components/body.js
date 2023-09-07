import RestrauntCard from "./restraunt";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import { RES_LIST } from "../utility/constants";
import { Link } from "react-router-dom";
const Body = ()=>{ 
   const [listofRes,setListofRes] = useState([]);
   const[searchText, setSerachText] = useState('');
   const [filteredRes,setFilteredRes]=useState([]);
   
   const fetchdata = async ()=>{
    const data = await fetch(RES_LIST);
    const json = await data.json(); 
    console.log("json",json);
    console.log("f",json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListofRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
   useEffect(()=>{
    fetchdata();
   },[]);
   
  return listofRes.length===0?<Shimmer/>:(
    <div className="body">
    <div className="search">
    <input type = "text" className="search-text" value= {searchText} onChange={(e)=>{setSerachText(e.target.value)}}/>
    <button className="search-btn" onClick={()=>{
       const filteredData = listofRes.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
     setFilteredRes(filteredData);

    }}>Search</button>
    </div>
    <div className="res-container">
    {
      filteredRes.map(res=>(
        <Link to={"/restaraunts/"+res.info.id}> <RestrauntCard resData = {res}/></Link>
      ))
      }
    </div>
    </div>
  )
}
export default Body;                                                       

