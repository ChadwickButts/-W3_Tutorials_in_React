import React from "react";

function ContactList({ contacts }) {

    let contactsArray = contacts.map((contact, index) => 
        (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>    
                <td>{contact.number}</td>    
                <td>{contact.email}</td>    
            </tr>
        )
    )

    return (
        <div className="contactList">
            <table>
                <tbody>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                    { contactsArray }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;