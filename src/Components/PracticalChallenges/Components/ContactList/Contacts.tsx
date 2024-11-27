import React, { useState } from "react";
import AddPerson from "./AddPerson";
import ContactList from "./ContactList";

function Contacts() {

    let [contacts, setContacts] = useState([]);

    function onAddPersonClick(contact) {
        let contactList = [...contacts, contact];
        setContacts(contactList);
    }

    return (
        <div className="contacts">
            <AddPerson onAddClick={onAddPersonClick}></AddPerson>
            <br/>
            <ContactList contacts={contacts}></ContactList>
        </div>
    )
}

export default Contacts;