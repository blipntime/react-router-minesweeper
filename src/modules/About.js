// modules/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>this is about<Link to="/">Main</Link>About</div>
  }
})