import { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }, [contacts]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "suyash",
  //     email: "suyashdhumal@35",
  //   },
  //   {
  //     id: 2,
  //     name: "suyash",
  //     email: "suyashdhumal@35",
  //   },
  // ];

  return (
    <div className="">
      <Header />
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} /> */}
      <AddContact />
      <ContactList contacts={contacts} getContactid={removeContactHandler} />
    </div>
  );
};

export default App;
