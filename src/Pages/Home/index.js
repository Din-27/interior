import React from 'react'
import './Home.css'
import { Header } from '../../Components'
import main_image from '../../Assets/image/interior_home.jpg'


function Home() {
  return (
    <>
        <Header/>
        <div className='top-container'>
            <img className='image-main' src={main_image} alt="main-image"/>
        </div>
    </>
  )
}

export default Home
