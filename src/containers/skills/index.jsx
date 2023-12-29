import React from 'react'
import { GiSkills } from "react-icons/gi";
import HeaderContent from '../../components/headerContent'
import { skillsData } from './utils';
import { Animate } from 'react-simple-animate';

const Skill = () => {
  return (
    <section id='skill' className='skill'>
      <HeaderContent
        headerText = "My Skill"
        icon={<GiSkills size={50}/>}
      />
      <div className='skill__content-wrapper'>
        {
          skillsData.map((item,i)=>(
            <div key={i} className="skill__content-wrapper__inner-content">
              <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform : 'translateX(-200px)'
              }}

              end={{
                transform : 'translateX(0px)'
              }}
              >
                <h3 className='skill__content-wrapper__inner-content__category'>{item.label}</h3>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skill