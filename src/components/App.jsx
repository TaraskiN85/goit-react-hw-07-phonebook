import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

import { addContact, deleteContact, fetchAllContacts, filterContacts } from "../redux/contacts/contactsSlice";
import { selectFilter, selectFilteredContacts } from "../redux/contacts/contactsSlice.selectors";

import { Container, Header, Main, Phonebook, PhonebookTitle, Title } from "./App.styled";

export const App = () => {

  const filter = useSelector(selectFilter)
  const filteredContacts = useSelector(selectFilteredContacts)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])
  
  const addNewContact = (formData => {

   
    dispatch(addContact(formData));
  })
  
  const handleSearch = searchData => dispatch(filterContacts(searchData));

  const handleDelete = contactId => dispatch(deleteContact(contactId))

  return (
    <Phonebook>
      <Header>
        <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        </Container>
      </Header>
      <Container>
        <Main>
          <section>
            <Title>Search Contacts</Title>
            <Filter
              value={filter}
              dataSearch={handleSearch}
            />
            <Title>Add New Contact</Title>
            <PhonebookForm addNewContact={addNewContact} />
          </section>
          <section>
            <Title>Contacts List</Title>
            <Contacts contacts={filteredContacts} deleteContact={handleDelete} />
          </section>
        </Main>
      </Container>
    </Phonebook>
  )
}
