import React from 'react'
import { Li } from './Contact.styled'

const Contact = ({ contactData, deleteContact }) => {
  
  const handleDeleteContact = (e) => {
    deleteContact(contactData.id)
  }

  return (
    <Li>
      <div>
        <p>{contactData.name}</p>
        <p>{contactData.phone}</p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </Li>
  )
}

export default Contact