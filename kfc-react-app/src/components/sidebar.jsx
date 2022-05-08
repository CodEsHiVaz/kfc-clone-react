

import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar" style={{display: 'flex', flexDirection: 'column',width:'300px', textAlign: 'center'}}>
    <img style={{height:"30px", width:"50px",marginLeft:"70px",marginBottom:"-30px"}}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
            alt="TripleRedLine"
          />
    <h1>KFC MENU</h1>
   
    
         
    <p>Match Day Specials</p>
    <p>Chicken Buckets</p>
    <p>Biryani Buckets</p>
    <p>Box Meals</p>
    <p>Burgers</p>
    <p>Stay Home Specials</p>
    <p>Snacks</p>
    <p>Beverages</p>
    

    </div>
  )
}

export default Sidebar