import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/loginUser",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        })

      }
    )

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    else{
      navigate("/")
    }
  }

  const handleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div className='container mt-3'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="inputEmail" name='email' value={credentials.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword" name='password' value={credentials.password} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/signup' className='m-3 btn btn-danger'>I'm a new user !</Link>
        </form>
      </div>
    </div>
  )
}
