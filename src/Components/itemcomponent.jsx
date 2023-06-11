import React from 'react'
import '../style.css'


const Itemcomponent = (props) => {
    return(
        <div className='cartContainer' onClick={props.handleShowItem }>
                {props.food}
            <div className='textContainer scrollItem'>
            <span style={{fontSize:'1.2em',fontWeight:'bold '}}>{props.name}</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold '}}> XAF: {props.price}/Kg </span><br/>
                {/* <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.1em'}}>Qty: {props.quantity} </span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.1em'}}>location: {props.location} </span><br/> */}

            </div> 
  
        </div>
    )
}

export default Itemcomponent