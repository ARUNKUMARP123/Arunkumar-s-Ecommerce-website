import{PropTypes} from "prop-types"
import {Card} from './Card'

export const ProductContainer = ({Products=[],handleAddToCart=()=>{}, Cart=[]}) => {

  function findCartStatus(Product={}){
    return (Cart.some((d)=>d.name==Product.name))

  }


  return (
    <>
        {Products.map((data,index)=>{
            return (
              
            <Card 
            key={`${data.name}-${index}`} 
            data={data}
             handleAddToCart={handleAddToCart}
             IsAddedToCart={findCartStatus(data)}
             />)
        }
         )};
    </>
  )
}


ProductContainer.propTypes={
  Products:PropTypes.array,
  handleAddToCart:PropTypes.func, 
  Cart:PropTypes.array,
}