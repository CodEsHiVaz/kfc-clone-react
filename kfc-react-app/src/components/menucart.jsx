import React from "react";
import { savedata } from "../utils/localStorage";

const CartButton = (item) => {
  const [count, setCount] = React.useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };
  const handleBtn = () => {
    setCount(1);
    console.log(item.item)
    // savedata("cart",item.item)
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
                onClick={() => handleCount(-1)}
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
                onClick={() => handleCount(1)}
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
