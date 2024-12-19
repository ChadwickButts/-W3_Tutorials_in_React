import React, { useState } from "react";

function AddPerson({ onAddClick }) {

    let [name, setName] = useState("");
    let [number, setNumber] = useState(0);
    let [email, setEmail] = useState("");

    function handleChange(event) {
        if (event.target.name === 'name') {
            setName(event.target.value);
        } else if (event.target.name === 'number') {
            setNumber(event.target.value);
        } else if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
    }

    function handleAddClick(event) {
        if (name === "" || email === "" || number < 1000000000 || number > 9999999999) {
            alert("Enter Valid Data");
        } else {
            let contact = {
                name: name,
                number: number,
                email: email
            }
            
            onAddClick(contact);
            setName("");
            setNumber(0);
            setEmail("");
        }

        event.preventDefault();
    }

    return (
        <div style={{
            backgroundColor: "tan"
        }}>
            <form onSubmit={handleAddClick}>
                <label htmlFor="name">
                    Person Name
                </label>
                <input type="text" name="name" value={name} required={true} onChange={handleChange} />
                <br />
                <label htmlFor="number">
                    Phone Number
                </label>
                <input type="number" name="number" value={number || ''} min="1000000000" required={true} onChange={handleChange} />
                <br />
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" value={email} required={true} onChange={handleChange} />
                <button type="submit">Add Person</button>
            </form>
        </div>
    )
}

export default AddPerson;