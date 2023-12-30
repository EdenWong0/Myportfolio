import React from 'react'
import { GiSkills } from "react-icons/gi";
import HeaderContent from '../../components/headerContent'
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';

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
                <div>
                  {
                    item.data.map((skillItem, j)=> (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity: 1", "opacity: 0"]}  // Corrected the prop name
                        iterationCount="1"
                      >
                        <div className='progressbar-wrapper' key={j}>
                          <p>{skillItem.skillName}</p>
                          <Line
                            percent={skillItem.percentage}
                            strokeWidth="2"
                            strokeColor="var(--navy-theme-main-color)"
                            trailWidth={"2"}
                            strokeLinecap="square"
                          />
                        </div>
                      </AnimateKeyframes>

                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skill