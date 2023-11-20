import React from 'react'
import './Home3.css'
import reac from './images/screenshot20230516-29500-n5pqth-removebg-preview.png'
const Home3 = () => {
  return (
    <>
    <div className='bigimage2'>
        <img src='https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=2000' alt='.' className='imagebig2'></img>
    </div>
    <div className="container34">
      {/* Flex Start */}
      <div className="flex-container flex-start">
        <h1>Research</h1>
      <img src={reac} alt=' .' className='reacimagelogo'></img>
      </div>

      {/* Flex Center */}
      <div className="flex-container flex-center">
        <h1 id='secontitle'>

        We research generative models and how to align<br /> them with human values.
</h1>
        <p>Learn about our Research</p>
      </div>
    </div>
    
    
    </>
  )
}

export default Home3