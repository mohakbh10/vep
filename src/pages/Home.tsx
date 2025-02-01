import { Login } from './Login';
import { Link } from 'react-router-dom';
import React from 'react'

const Home = () => {
  return (
    <div>
        <nav>
            <Link to="/Login">login</Link>
        </nav>
    </div>
  )
}

export default Home
