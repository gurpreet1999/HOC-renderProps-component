import React, { forwardRef } from 'react'
import withDimension from './WithDimension';

const Comp1 = (props, ref) => {
  return (
    <div ref={ref} className="comp1">
    Hey I am comp1 width: {props.width}
    {props.hello}
  </div>
  )
}

export default withDimension(forwardRef(Comp1));