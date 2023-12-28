import React from 'react';
import { IoMdContacts } from "react-icons/io";
import HeaderContent from '../../components/headerContent';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <HeaderContent
        headerText = "My Contact"
        icon={<IoMdContacts size={50}/>}
      />
    </section>
  )
}

export default Contact