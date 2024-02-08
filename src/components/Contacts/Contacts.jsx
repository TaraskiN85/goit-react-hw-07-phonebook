import Contact from 'components/Contact/Contact'
import { ContactsList, Container } from './Contacts.styled'

export const Contacts = ({contacts, deleteContact}) => {
  
  const sortedContacts = contacts.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))

  return (
    <Container>
      <ContactsList>
        {sortedContacts.map(contact => {
          return <Contact key={contact.id} contactData={contact} deleteContact={deleteContact}>
          </Contact>
        })}
      </ContactsList>
    </Container>
  )
}
