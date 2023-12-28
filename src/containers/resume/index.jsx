import React from 'react'
import { GrResume } from "react-icons/gr";
import HeaderContent from '../../components/headerContent'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <HeaderContent
        headerText = "My Resume"
        icon={<GrResume  size={50}/>}
      />
    </section>
  )
}

export default Resume