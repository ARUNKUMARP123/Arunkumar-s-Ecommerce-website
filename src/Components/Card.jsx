import {PropTypes} from "prop-types"

export const Card = ({ data,Cart,setCart}) => {

    function renderRatings(rating = 0) {
        let ratingsNode = [];
        for (let i = 0; i < rating; i++) {
          ratingsNode.push(<div className="bi-star-fill"></div>);
        }
        return ratingsNode;
      }
    
      const AddToCart=()=>{
        setCart([...Cart,data])
      };
      const RemoveFromCart=()=>{
        setCart(Cart.filter((c)=>c.name!==data.name));
      };
    
  return (
    
    <div className="shake-x py-1 mt-3">
        <div className="col mb-1">
                        <div className="card " style={{height:"550px"}}>
                        {/* <!-- Sale badge--> */}
                           <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top " style={{height:"300px"}} src={data.image } alt="image" />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-3 "  >
                                <div className="text-center" >
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{data.name}</h5>
                                    {/* <!-- Product price--> */}
                                     <span className="text-muted text-decoration-line-through">${data.normalCost}</span> - ${data.actualCost}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                    {renderRatings(data.rating)}
                                        </div>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">{Cart.includes(data)?(<button className="btn btn-outline-dark mt-auto"  onClick={RemoveFromCart}>Remove From Cart</button>):(<button className="btn btn-outline-dark mt-auto"  onClick={AddToCart}>Add To Cart</button>)}</div>
                            </div>
                        </div>
                    </div>
    </div>

  )
 
}

Card.propTypes={
    data:PropTypes.object,
    includes:PropTypes.func,
    Cart:PropTypes.array,
    setCart:PropTypes.func,
    
      
}