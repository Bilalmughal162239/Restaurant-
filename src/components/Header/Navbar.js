import React from 'react'
import logo from '../../asset/images/logo.gif'
import profile from '../../asset/images/profile.png'
import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { useAuthContext } from '../../Context/Auth'

const Navbar = () => {
    const { isAuth,handleLogout } = useAuthContext()
    // console.log('isAuth', isAuth)
    return (
        <haeder id='Navbar_Header'>
            <nav className="navbar navbar-expand-lg  navbar-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand"><img src={logo} alt="LogoImage" className='img-fluid rounded-4' width="40px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto w-50 mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <Link to='/menu/burgur' className="nav-link active">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/deals' className="nav-link active">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/gallery' className="nav-link active">Gallery</Link>
                            </li>
                        </ul>
                        <div>
                            {!isAuth
                                ?
                                <Space>
                                    <Link to='/auth/register'  className='btn btn-info'>Register</Link>
                                    <Link to='/auth/login'  className='btn btn-primary'>Login</Link>
                                </Space>
                                :
                                <Space>
                                    <Link to='/auth/profile'><img src={profile} alt="Register" className='img-fluid rounded-pill' width='40px' /></Link>
                                    <button className='btn btn-danger' onClick={handleLogout} >Logout</button>
                                </Space>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </haeder>
    )
}

export default Navbar