import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RES_MENUAPI } from '../utility/constants';
import Shimmer from './shimmer';

const RestarauntMenu = () => {
  const[resMenu,setResMenu]=useState(null);
  const {resId} = useParams();    
  useEffect(()=>{
    fetchMenu();
  },[])
  const fetchMenu = async()=>{
    const data = await fetch(RES_MENUAPI+resId);
    const json = await data.json();
    console.log("json data",json.data)
    setResMenu(json.data);
    console.log("rs",resMenu);
  }
  if (resMenu === null) return <Shimmer />;
  const {name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestarauntMenu;