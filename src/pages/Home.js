import React, { useEffect } from 'react';
import '../assets/css/Home.css';
import img_intro from '../assets/images/bg-gym1.png'

function Home() {
  useEffect(() => {
    document.title = "Trang chủ"; 
  }, []); 
  return (
    <div>
      <section className="hero-section">
        <div className="container">
            <div className='main-content'>
              <div className="col-lg-5 hero-content">
                <h1>
                  REACH YOUR LIMITS <br />
                  AND GET TO THE <br />
                  NEXT LEVEL
                </h1>
                <div className="hero-description">
                  The resistance that you fight physically in the gym and the
                  resistance that you fight in life can only build a strong
                  character
                </div>
                <button className="get-started-btn">Get started</button>
              </div>
              <div className=" ">
                <img src={img_intro} alt="" />
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Home;