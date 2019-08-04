// import React, { useState } from "react";
import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

const Contacts = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 1, name: "Rajiv", email: "rajiv@gmail.com", phone: "1111 1111" },
  //   { id: 2, name: "Harshu", email: "harshu@gmail.com", phone: "2222 2222" },
  //   { id: 3, name: "Chottu", email: "chottu@gmail.com", phone: "3333 2222" }
  // ]);

  // const deleteInfo = (event, id) => {
  //   const tempContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(tempContacts);
  // };

  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
      </h1>
      <Consumer>
        {value => {
          const { contacts } = value;
          return contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              // deleteInfo={deleteInfo}
            />
          ));
        }}
      </Consumer>
    </>
  );
};

export default Contacts;

/* {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteInfo={deleteInfo} />
      ))} */
