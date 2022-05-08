import React from "react";
import { savedata } from "../utils/localStorage";
import {useDispatch} from 'react-redux'
import { addToCart, DecQty, IncQty } from "../redux/guddu/cartRedux/CartAction";

const CartButton = (item) => {
  const [count, setCount] = React.useState(0);
  const dispatch = useDispatch();
  

  const handleInc =()=>{
    setCount(count + 1);
    console.log(item.item.id)
    dispatch(IncQty(item.item.id));
  }
  const handleDec =()=>{
    
    if (count > 1) {
      setCount(count -1);
      dispatch(DecQty(item.item.id));
    }
  }
  const handleBtn = () => {
    setCount(1);
    console.log(item.item)
    dispatch(addToCart(item.item))
  };

  return (
    <>
      <div className="bt">
        {count === 0 ? (
          <button className="addcart" onClick={handleBtn}>
            Add to Cart
          </button>
        ) : (
          <div className="btn-div">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                className="btn"
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  width: "45px",
                  borderRadius: "50%",
                }}
                onClick={handleDec}
              >
                -
              </button>
              <p className="count-item">{count}</p>
              <button
                className="btn"
                style={{
                  padding: "10px ",
                  fontSize: "20px",
                  width: "45px",
                  borderRadius: "50%",
                }}
                onClick={handleInc}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartButton;
