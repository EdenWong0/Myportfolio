import React from 'react'
import './home.scss'
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import edenImage from '../../assist/eden.jpeg'
import { FaDownload } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const Home = () => {

  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage=()=>{
    navigate('/contact');
  };

  const handleDownloadResume = () => {
    const resumeUrl = '../../assist/myresume.pdf';
    // Trigger download using JavaScript
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'myresume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='home' className='home'>
      <div className='home__content-wrapper'>
        <div className='home__text-wrapper'>
          <h1>
            Hi there 👋🏻, I am Eden Wong
            <br />
            <strong style={{ color: '#0000cc' }}>A Front End Developer 👨🏻‍💻 </strong>
          </h1>
        </div>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateY(550px)',
      }}
      end={{
        transform : 'translatex(0px)',
      }}
      >
      <div className='home__contact-me'>
        <button onClick={handleNavigateToContactMePage}>
        👉🏻 Contact Me
        <MdContactPhone style={{ marginRight: '8px' }} />
        </button>
        <button onClick={handleDownloadResume}>
        👉🏻 Download My Resume
        <FaDownload style={{ marginRight: '8px' }} />
        </button>
      </div>
      </Animate>
    </section>
  )
}


export default Home