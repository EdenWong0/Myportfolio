import React from 'react'
import './home.scss'
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import edenImage from '../../assist/eden.jpeg'

const Home = () => {

  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToContactMePage=()=>{
    navigate('/contact');
  }
  return (
    <section id='home' className='home'>
      <div className='home__content-wrapper'>
        <div className='home__text-wrapper'>
          <h1>
            Hi there, I am Eden
            <br />
            <strong>A Front End Developer</strong>
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
        <button onClick={handleNavigateToContactMePage}>Contact Me</button>
        <button>Download My Resume</button>
      </div>
      </Animate>
    </section>
  )
}


export default Home