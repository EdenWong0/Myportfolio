import React from 'react';
import './about.scss';
import { Animate } from 'react-simple-animate';
import { FcAbout } from "react-icons/fc";
import HeaderContent from '../../components/headerContent';
import { MdEmojiPeople } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import {DiJavascript1 } from 'react-icons/di'
import {FaDev, FaReact , FaHtml5, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si";
import frontend from '../../assist/about/frontend.jpg';
import uxui from '../../assist/about/uiux.jpg';
import database from '../../assist/about/database.png';
import web from '../../assist/about/web.jpg'


const personalDetails = [
  {
    label: 'Name',
    value: 'Pak Hin Wong',
    icon: <MdEmojiPeople />,
  },
  {
    label: 'Address',
    value: 'North York, Toronto, Ontario, Canada',
    icon: <FaAddressCard />,
  },
  {
    label: 'Email',
    value: 'wedenpakhin@gmail.com',
    icon: <MdEmail />,
  },
  {
    label: 'Phone',
    value: '+1(437)981-9858',
    icon: <FaPhone />,
  },
];

const summary = (
  <>
    <div className='serviceBoxes'>
    <div className='serviceBox'>
      <img src={frontend} alt="Front End Development" />
      <h4>Front End Development</h4>
      <p>Building user interfaces and interactions using HTML, CSS, and JavaScript.</p>
    </div>
    <div className='serviceBox'>
      <img src={web} alt="Web Development" />
      <h4>Web Development</h4>
      <p>Creating dynamic and interactive websites with a focus on performance and functionality.</p>
    </div>
    <div className='serviceBox'>
      <img src={uxui} alt="UI/UX Design" />
      <h4>UI/UX Design</h4>
      <p>Designing visually appealing and user-friendly interfaces to enhance user experience.</p>
    </div>
    <div className='serviceBox'>
      <img src={database} alt="Responsive Design" />
      <h4>Database Administration</h4>
      <p>Ensuring efficient management and optimization of databases for websites and applications.</p>
    </div>
  </div>
  </>
);

const About = () => {
  return (
    <section id='about' className='about'>
      <HeaderContent
        headerText = "About Me"
        icon={<FcAbout size={50}/>}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
        <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateX(-900px)',
      }}
      end={{
        transform : 'translatex(0px)',
      }}
      >
        <h3>What I Do ?</h3>
        <p>{summary}</p>
      </Animate>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateX(500px)',
      }}
      end={{
        transform : 'translatex(0px)',
      }}
      >
      <h3 className='personalHeader'>Personal Information</h3>
      <ul>
        {
          personalDetails.map((item,i) => (
            <li key={i}>
              <span className='icon'>{item.icon}</span>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
        }
      </ul>
      </Animate>
        </div>
        <div className='about__content__serviceWrapper'>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{
                transform : 'translateX(600px)',
              }}
              end={{
                transform : 'translatex(0px)',
              }}
            >
          <div className='about__content__serviceWrapper__innerContent'>
          <div>
            <FaDev size={60} color="var(--navy-theme-main-color)" />
          </div>
          <div>
            <FaHtml5 size={60} color="var(--navy-theme-main-color)" />
          </div>
          <div>
            <FaReact size={60} color="var(--navy-theme-main-color)" />
          </div>
          <div>
            <DiJavascript1 size={60} color="var(--navy-theme-main-color)" />
          </div>
          <div>
            <SiTailwindcss size={60} color="var(--navy-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var(--navy-theme-main-color)" />
          </div>
        </div>
        </Animate>
        </div>
      </div>
    </section>
  )
}

export default About