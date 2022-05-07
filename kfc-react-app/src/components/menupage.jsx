import React from "react"
import data from '../db.json'
import CartButton from "./menucart"
import GroceryItem from "./menuitem"


const GroceryDetails = ()=>{
console.log(data)

    return(
        
    

     
        
        <div className="container">
         
           {data.map((item)=>(
          <div>
              <GroceryItem item={item}/>
              <CartButton/>

          </div>
           ))}
               
        </div>
        
    )
}
export default GroceryDetails