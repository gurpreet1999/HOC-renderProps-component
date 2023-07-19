import React, { forwardRef } from 'react'
import withDimension from './WithDimension';

const Comp2 = (props, ref) => {
  return (
    <div ref={ref} className="comp1">
      Hey I am comp2 width: {props.width}
    </div>
  )
}

export default withDimension(forwardRef(Comp2));