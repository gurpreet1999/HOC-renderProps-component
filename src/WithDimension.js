import React, { useEffect, useRef, useState } from 'react'

const withDimension = (Component) => {

return function WithDimension(props){

const [width,setwidth]=useState(null)
const[height,setheight]=useState(null)

const componentRef=useRef(null)

useEffect(()=>{

if(componentRef.current){
    setwidth(componentRef.current.offsetWidth)
    setheight(componentRef.current.offsetHeight)
}

},[componentRef])




    return <Component  ref={componentRef}  height={height} width={width} {...props} />
        


}

  
}

export default withDimension