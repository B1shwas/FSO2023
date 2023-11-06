import React, { useState } from 'react';

import { AddContact, Filter, SubmitBut, Name } from './components';

export const Page = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
      contact: '0-12034-421',
    }
  ]);

  const [newPerson, setNewPerson] = useState('');
  const [newContact, setNewContact] = useState('');
  const [search, setSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
      if (persons.some(person => person.name === newPerson)) {
        alert(`${newPerson}` + ' is already added to phonebook');
      } else {
        const newPersonObj = {
          name: newPerson, 
          id: persons.length + 1,
          contact: newContact
        };
        setPersons([...persons, newPersonObj]);
        setNewPerson('');
        setNewContact('');
      }
  };
  

  const handleChangeName = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  };
  const handleChangeContact = (event) => {
    setNewContact(event.target.value);
  };
  const handleChangeSearch = (event) => {
    setSearch(event.target.value); 
  };

  const filteredPersons = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <h2>Phonebook</h2>
      <Filter text='filter shown with ' 
       search={search} 
       handleChange={handleChangeSearch}
       />
      <form onSubmit={handleSubmit}>
        <h2>Add New Contact</h2>
        <div>
          <AddContact 
           text='Name'
           newVal={newPerson}
           handleChange={handleChangeName}
          />
         <br></br>
         <AddContact
           text='Contact'
           newVal={newContact}
           handleChange={handleChangeContact}
          />
        </div>
        <div>
          <SubmitBut 
           name='Add' 
           type='submit'
          />

        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <Name
           key={person.id}
           name={person.name}
           contact={person.contact}
          />
        ))}
      </div>
      
    </>
  );
};