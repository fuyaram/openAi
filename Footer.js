import React from 'react'
import './Footer.css'
import logo2 from './images/2560-removebg-preview.png'
import miramaruti from './images/Screen_Shot_2023-02-22_at_12.45.51_AM-removebg-preview.png'
const Footer = () => {
  return (
    <>
    <section className="footer">
  <div className="footer-row">
    <div className="footer-col">
     
      <ul className="links">
        <img src={logo2} alt='.' className='logo2'></img>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Research</h4>
      <ul className="links">
        <li>
          <a href=".">Overview
</a>
        </li>
        <li>
          <a href=".">index</a>
        </li>
        <li>
          <a href=".">GPT-4</a>
        </li>
        <li>
          <a href=".">DALL·E 3</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>API
</h4>
      <ul className="links">
        <li>
          <a href=".">Overview</a>
        </li>
        <li>
          <a href=".">Data privacy
</a>
        </li>
        <li>
          <a href=".">Pricing</a>
        </li>
        <li>
          <a href=".">Docs</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>CHATGPT
</h4>
      <ul className="links">
        <li>
          <a href=".">Overview</a>
        </li>
        <li>
          <a href=".">Enterprise</a>
        </li>
        <li>
          <a href=".">try CHATGPT</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>COMPANY
</h4>
      <ul className="links">
        <li>
          <a href=".">About
</a>
        </li>
        <li>
          <a href=".">blogs</a>
        </li>
        <li>
          <a href=".">Careers
</a>
        </li>
        <li>
          <a href=".">Charter</a>
        </li>
        <li>
          <a href=".">Security
</a>
        </li>
        <li>
          <a href=".">Customer stories</a>
        </li>
        <li>
          <a href=".">safety</a>
        </li>
      </ul>
    </div>
  </div>
</section>
<section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>OpenAI © 2015 – 2023</h4>
      <ul className="links">
        <li>
          <a href=".">Customer Agreement</a>
        </li>
        <li>
          <a href=".">Privacy Policy</a>
        </li>
        <li>
          <a href=".">Terms & policies
</a>
        </li>
        <li>
          <a href=".">Brand guidelines</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
     
      <ul className="links">
       <div className='mira'>
       <img src={miramaruti} alt='.' className='logoimage1'></img>
       <h3 id='miramarutiname'>Mira Murati</h3>
       <h4 id='miraprofession'> CEO and CTO of OpenAI</h4>
       </div>
      </ul>
    </div>
    <div className="footer-col">
      <h4>openAI</h4>
      <p>
      Unleash: What potential lies within OpenAI's cutting-edge technology?
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required="" />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <div className="icons">
        <i className="fa-brands fa-facebook-f" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-github" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Footer