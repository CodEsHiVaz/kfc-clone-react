import React from "react"
import data from '../db.json'
import CartButton from "./menucart"
import GroceryItem from "./menuitem"
import Navbar from "./shhivajiscompo/navbar/Navbar"
import Sidebar from "./sidebar"

const GroceryDetails = ()=>{
// console.log(data)

    return(
        
    
<>

     <Navbar/>
        
 <Sidebar/>
      
        <div className="container">
          
           {data.map((item)=>(
          <div>
              <GroceryItem item={item}/>
              <CartButton/>

          </div>
           ))}
               
        </div>


</>
        
    )
}
export default GroceryDetails