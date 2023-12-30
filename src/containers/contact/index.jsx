import React from 'react';
import { IoMdContacts } from "react-icons/io";
import HeaderContent from '../../components/headerContent';
import { Animate } from 'react-simple-animate';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <HeaderContent
        headerText = "Contact Me"
        icon={<IoMdContacts size={50}/>}
      />
      <div className='contact__content'>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform : "translateX(-200px)"
        }}
        end={{
          transform : "translateX(0px)"
        }}
        >
          <h3 className=''>Let's talk with me</h3>
        </Animate>
      </div>
    </section>
  )
}

export default Contact