// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo">
          <img
            className="logo-img"
            alt="logo"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          />
          <h1 className="logo-text">Wave</h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
