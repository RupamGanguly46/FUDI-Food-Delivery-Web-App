import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"", email:"", password:"", location:""});
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch(
            "http://localhost:5000/api/createUser", 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location
                })

            }
        )

        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }
    }

    const handleChange = (event) => {
        setcredentials({...credentials, [event.target.name] : event.target.value})
    }

    return (
        <div>
            <div className='container mt-3'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name='name' value={credentials.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" name='email' value={credentials.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" name='password' value={credentials.password} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLocation" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputLocation" name='location' value={credentials.location} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger'>Already a user ?</Link>
                </form>
            </div>
        </div>
    )
}
