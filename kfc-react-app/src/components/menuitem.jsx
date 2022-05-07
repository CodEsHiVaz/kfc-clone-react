
const GroceryItem = ({item}) => {
  const {discount,imgURL,mrp,sellingPrice,title,detail}=item
  return (
<div className="grocery">
  <div className="upper">
    <p>{discount}</p>
    <img src={imgURL} alt="" />

  </div>
  <p>{title}</p>
  <div className="price-div">
    <p>{mrp}</p>
    <p>{sellingPrice}</p>
<p>{detail}</p>
  </div>
</div>

  )

};
export default GroceryItem;