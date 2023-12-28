import React from 'react'
import { GiSkills } from "react-icons/gi";
import HeaderContent from '../../components/headerContent'

const Skill = () => {
  return (
    <section id='skill' className='skill'>
      <HeaderContent
        headerText = "My Skill"
        icon={<GiSkills size={50}/>}
      />
    </section>
  )
}

export default Skill