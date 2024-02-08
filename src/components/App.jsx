import { useDispatch, useSelector } from "react-redux";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { addContact, deleteContact, fetchAllContacts, filterContacts } from "../redux/contacts/contactsSlice";

import { useEffect } from "react";
import { ContactsTitle, Phonebook, PhonebookTitle } from "./App.styled";

export const App = () => {

  const contacts = useSelector(state => state.contactsData.contacts.items)
  const filter = useSelector(state => state.contactsData.filter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])
  
  const addNewContact = (formData => {
    const isDuplicate = contacts.some(contact => contact.name === formData.name)
    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`)
      return
    }
   
    dispatch(addContact(formData));
  })
  
  const handleSearch = searchData => dispatch(filterContacts(searchData));

  const handleDelete = contactId => dispatch(deleteContact(contactId))

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.phone.includes(filter)
  })

  return (
    <Phonebook>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <PhonebookForm addNewContact={addNewContact} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter
        value={filter}
        dataSearch={handleSearch}
      />
      <Contacts contacts={filteredContacts} deleteContact={handleDelete} />
    </Phonebook>
  )
}
