import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
     <section className="video-section678">
      <video className="background-video678" autoPlay loop muted>
        <source src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content245">
      <h1 id="opp">
Creating safe AGI that benefits
</h1>
<h1 id="oppop">all of humanity</h1>
<button className='homebtn'>learn about opne Ai</button>
      </div>
    </section>
    <div className="container">
      {/* Flex Start */}
      <div className="flex-container flex-start">
        <h1>Pioneering research<br /> on the path to AGI</h1>
        <p>Learn about our research</p>
      </div>

      {/* Flex Center */}
      <div className="flex-container flex-center">
        <h1>Transforming work and <br />creativity with AI
</h1>
        <p>Explore our products</p>
      </div>

      {/* Flex End */}
      <div className="flex-container flex-end">
        <h2>Join us in shaping the <br />future of technology</h2>
        <p>View careers</p>
      </div>
    </div>
    </>
  )
}

export default Home