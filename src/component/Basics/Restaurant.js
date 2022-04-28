import React, { useState } from 'react'
import './style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList=[...new Set(Menu.map((curEle)=>{
    return curEle.category;
})),"All"]




const Restaurant = () => {
    const [menuList,setMenuList]=useState(uniqueList)
    const [menuData, setMenuData] = useState(Menu);
    
    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(Menu);
         return
        }
     const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
  
     setMenuData(updatedList);
    
       
      };

  return (
      <>
     <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restaurant;
