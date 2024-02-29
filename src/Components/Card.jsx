import {PropTypes} from "prop-types"

export const Card = ({ data={}, handleAddToCart=()=>{},IsAddedToCart=false}) => {

    function renderRatings(rating = 0) {
        let ratingsNode = [];
        for (let i = 0; i < rating; i++) {
          ratingsNode.push(<div className="bi-star-fill"></div>);
        }
        return ratingsNode;
      }
    
    
  return (
   
    <div className="py-1 mt-3">
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
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto"  onClick={()=> handleAddToCart(data)}>{IsAddedToCart?"Added To Cart":"Add To Cart"}</button></div>
                            </div>
                        </div>
                    </div>
    </div>

  )
 
}

Card.propTypes={
    data:PropTypes.object,
    handleAddToCart:PropTypes.func,
    IsAddedToCart:PropTypes.bool,
}