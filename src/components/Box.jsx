import React from 'react'
import "./box.css"

const Box = ({children}) => {
  return (
<div className="w-130 h-50 container m-auto mb-20 mt-15 border-2 border-stone-600">
    <div className="w-130 h-50 purple bg-red-800 m-auto">
    {children}
    </div>
</div>
  )
}

export default Box