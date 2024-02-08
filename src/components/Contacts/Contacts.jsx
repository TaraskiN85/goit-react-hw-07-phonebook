import css from './Contacts.module.css'

export const Contacts = ({contacts, deleteContact}) => {
  
  const handleDeleteContact = (e) => {
    const contactId = e.currentTarget.id
    console.log(contactId)
    deleteContact(contactId)
  }
  
  const sortedContacts = contacts.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))

  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {sortedContacts.map(contact => {
          return <li key={contact.id} >
            <div className={css.contactsItem}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button className={css.delete} onClick={handleDeleteContact} name={contact.name} id={contact.id}>Delete</button>
              <button className={css.delete} name={contact.name} id={contact.id}>Edit</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
