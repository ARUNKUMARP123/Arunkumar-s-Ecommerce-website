import{PropTypes} from "prop-types"
import {Card} from './Card'

export const ProductContainer = ({Products=[],Cart,setCart}) => {



  return (
    <>
        {Products.map((data,index)=>( 
        <Card 
            key={`${data.name}-${index}`} 
            data={data}
            Cart={Cart}
            setCart={setCart}
            
             />))};
    </>
  )
}


ProductContainer.propTypes={
  Products:PropTypes.array,
 Cart:PropTypes.array,
 setCart:PropTypes.func,
}