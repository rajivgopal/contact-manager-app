// import React, { useState } from "react";
import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

const Contacts = () => {
  

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
