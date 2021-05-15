// Write your JS code here
import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          alt="home"
          className="content-image"
        />
        <h1 className="heading">About</h1>
        <p>I love creating! I am Front-end Developer</p>
      </div>
    )
  }
}

export default About
