import React from 'react';

import './Home8.css'; // Assuming you have some additional styles in this file
import bologo from './images/2560px-OpenAI_Logo__2_.svg-removebg-preview.png'



const Home8 = () => {
  return (
    <>
     <div className="containerend">
      <div className="right">
        <h2 id='quets'>I encourage my team to keep learning. <br />Ideas in different topics or fields can<br /> often inspire new ideas and broaden the <br />potential solution space.</h2>
        <h1 id='lilian'>Lilian Weng</h1>
        <h3 id='lilienpro'>Applied AI at OpenAI</h3>
        <img src={bologo} alt='.' className='bottomlogo'></img>
      </div>
      <div className="left">
        <img className='Weng' src="https://images.openai.com/blob/734af367-24c1-4043-934c-269a6a3ec47e/stangel-2022-0484.jpg?trim=0,537,40,462&width=2000" alt="Your Imag" />
      </div>
    </div>
    
    </>
  );
};

export default Home8;
