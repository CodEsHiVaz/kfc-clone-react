
const GroceryItem = ({item}) => {
  const {discount,imgURL,mrp,sellingPrice,title,detail}=item
  return (
<div className="grocery">
  <div className="upper">
    <p>{discount}</p>
    <img style={{
  width: "100%",
  height: "100%"}} src={imgURL} alt="" />

  </div>
  <p>{title}</p>
  <div className="price-div">
    <div style={{display:"flex", flexDirection:"column", marginTop:"-20px"}}>

      <p>{mrp}</p>
    
<p>{detail}</p>


    </div>
  </div>
</div>

  )

};
export default GroceryItem;