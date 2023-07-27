import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Components/Navbarstyle.css'
export default function Home(){
    useState()
return(
<div className='Container'>
    <Navbar />

    <div className='topHome'>
        <h1 className='topHome-text'>Generate your image, make it as detailed as you want.</h1>
    </div>

    <form className='promptForm'>
        <input type="text" id="promptId" />
        <button className='promptBtn'>Generate</button>
    </form>
</div>
)
}