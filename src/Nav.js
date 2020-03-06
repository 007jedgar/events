import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

const styles = {
  navStyle: {
    color: '#fff',
  },
  homeLinkStyle: {
    color: '#fff',
    textDecoration: 'none',
  }
}

function Nav() {
  const { navStyle, homeLinkStyle} = styles
  return (
    <nav>
      <h3><Link to="/" style={homeLinkStyle}>Events and Ticket Saas</Link></h3>

      <ul className="nav-links">
        <Link style={navStyle} to="/create_event">
          <li>New Event</li>
        </Link>

        <Link style={navStyle} to="/ticket_wallet">
          <li>Events and Tickets</li>
        </Link>
      </ul>

    </nav>
  )
}

export default Nav;