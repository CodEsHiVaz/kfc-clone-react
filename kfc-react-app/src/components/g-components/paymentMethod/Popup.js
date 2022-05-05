import React from 'react'
import "./popup.css"

export const Popup = (props) => {
  return (props.trigger) ?
    <div className='popup'>
        <div className='popup_inner'>
            <button>close</button>
            {props.children}
        </div>

        
    </div>:"";
}
