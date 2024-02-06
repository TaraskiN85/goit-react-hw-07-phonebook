import { useDispatch, useSelector } from "react-redux";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { addContact, deleteContact, filterContacts } from "../redux/contacts/contactsSlice";

import css from './App.module.css';
import axios from "axios";

export const App = () => {

  const contacts = useSelector(state => state.contactsData.contacts)
  const filter = useSelector(state => state.contactsData.filter)
  
  const dispatch = useDispatch();

  const addUser = (formData => {
    const isDuplicate = contacts.some(contact => contact.name === formData.name)
    
    if (isDuplicate) {
      alert(`${formData.name} is already in contacts.`)
      return
    }
   
    dispatch(addContact(formData));
  })
  
  const fetchFromApi = async () => {
    const fetched = await axios('https://65c27f44f7e6ea59682b75e0.mockapi.io/contacts', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    console.log(fetched.data)
  }
  const handleSearch = searchData => dispatch(filterContacts(searchData));

  const handleDelete = name => dispatch(deleteContact(name))

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
  })

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <PhonebookForm addUser={addUser} />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <button onClick={fetchFromApi}>download from API</button>
      <Filter
        value={filter}
        dataSearch={handleSearch}
      />
      <Contacts contacts={filteredContacts} deleteContact={handleDelete} />
    </div>
  )
}
