import React, { useState } from 'react'

export default function FormComponent() {
    const[name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value);
      };

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
  return (
    <div>
        <form>
            <div>
                <label> Name: </label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label> Email: </label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
        </form>
        <div>
            <h2>Entered Information</h2>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    </div>
  )
}
