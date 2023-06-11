import React, {useState} from 'react'
import productArray from '../data/productData'
import Itemcomponent from './itemcomponent'

const Carousel = () => { 
const [showItem, setshowItem] = useState(false)
const {category, id, products}  = productArray[0];


//use setShowItem(!showItem) for a button or a component which you want to show and onshow when ever you click
const handleShowItem = () =>{
    setshowItem(true)
}

 const CarouselArray = products.map((item)=> {
     return(
            <Itemcomponent handleShowItem={handleShowItem} food={item.image} name={item.name}  price={item.price} quantity={item.quantity} location={item.location}  />
        )
    }) 
    const Item = CarouselArray[1];

  return (
    <div>
      { products.map((item)=> {
     return(
            <Itemcomponent handleShowItem={handleShowItem} food={item.image} name={item.name}  price={item.price} quantity={item.quantity} location={item.location}  />
        )
    }) }
    </div>
  )
}

export default Carousel