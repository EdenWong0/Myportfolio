import React from 'react';
import { GrResume } from "react-icons/gr";
import HeaderContent from '../../components/headerContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from './utils';
import './resume.scss';
import { FaHandPointDown } from "react-icons/fa";

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <HeaderContent
        headerText = "My Resume"
        icon={<GrResume  size={50}/>}
      />
      <div className='timeline'>
        <div className='timeline__experience'>
          <h3 className='timeline__experience__header-text'>Experience</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--navy-theme-main-color)"
          >
            {
              data.experience.map((item,i) => (
                <VerticalTimelineElement
                key={i}
                className='timeline__experience__vertical-timeline_element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--navy-them-sub-text-color)',
                  border: '1.5px solid var(--navy-them-main-color)'
                }}
                icon={<FaHandPointDown/>}
                iconStyle={{
                  background: '#ffffff',
                  color: '#778899',
                }}
                >
                  <div className='vertical-timeline_element-title-wrapper'>
                    <h3>
                      {item.titleIcon}{item.title}
                    </h3>
                    <h4>
                      {item.locationIcon}{item.subtitle}
                    </h4>
                    <h4>
                      {item.workIcon}{item.place}
                    </h4>
                    <h4>
                      {item.durationIcon}{item.year}
                    </h4>
                  </div>

                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>
        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor="var(--navy-theme-main-color)"
          >
            {
              data.education.map((item,i) => (
                <VerticalTimelineElement
                key={i}
                className='timeline__experience__vertical-timeline_element'
                contentStyle={{
                  background: 'none',
                  color: 'var(--navy-them-sub-text-color)',
                  border: '1.5px solid var(--navy-them-main-color)'
                }}
                icon={<FaHandPointDown/>}
                iconStyle={{
                  background: '#ffffff',
                  color: '#778899',
                }}
                >
                  <div className='vertical-timeline_element-title-wrapper'>
                    <h3>
                      {item.subjectIcon}{item.title}
                    </h3>
                    <h4>
                      {item.locationIcon}{item.subtitle}
                    </h4>
                    <h4>
                      {item.gradIcon}{item.place}
                    </h4>
                    <h4>
                      {item.durationIcon}{item.year}
                    </h4>
                  </div>

                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>  
    </section>
  )
}

export default Resume