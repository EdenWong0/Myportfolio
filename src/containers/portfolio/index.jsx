import React from 'react'
import { GrProjects } from "react-icons/gr";
import HeaderContent from '../../components/headerContent'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <HeaderContent
        headerText = "Portfolio"
        icon={<GrProjects size={50}/>}
      />
    </section>
  )
}

export default Portfolio