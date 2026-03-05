import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        // navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FUDI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            { (localStorage.getItem("authToken"))
                            ?
                                <Link className="nav-link" aria-current="page" to="/">My Orders</Link>

                            : 
                                ""

                            }
                        </ul>
                        { (!localStorage.getItem("authToken")) 
                        ?
                            <div className='d-flex'>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            </div>
                        :   
                            <div className='d-flex'>
                                <div>
                                    <Link className="btn bg-white text-success mx-1" to="/">Cart</Link>
                                </div>
                                <div>
                                    <Link className="btn bg-white text-danger mx-1" to="/login" onClick={handleLogout}>Logout</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
