import React, { useState } from 'react'

import "./play.css"

const Play = ({playing, setPlaying}) => {

    //const [message, setMessage] = useState("")



  return (
    <>
    <button className="heart rounded-full border-2 size-24 p-2 text-6xl mx-10 my-5 cursor-[url('/music.png'),_auto]" onClick={() => setPlaying(!playing)} onMouseOver={() => {console.log("hello")}}>
    🖤
    </button>

   
    
    </>
  )
}

export default Play