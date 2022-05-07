import React from "react"
import data from '../db.json'
import CartButton from "./menucart"
import GroceryItem from "./menuitem"

import Sidebar from "./sidebar"

console.log(data)
const GroceryDetails = ()=>{
console.log(data)

    return(
        
   <>
  

     <Sidebar/>
        
        <div className="container">
         
           {data.map((item)=>(
          <div>
              <GroceryItem {...item}/>
              <CartButton/>

          </div>
           ))}
               
        </div>
   
   
   </>
        
    )
}
export default GroceryDetails