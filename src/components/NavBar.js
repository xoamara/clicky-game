import React from 'react'

function NavBar(props) {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">CLICKY GAME</a>
          </li>
          <li>
            {props.message}
                </li>
          <li>
            Score: {props.score} | Top Score: {props.topScore}
                </li>
        </ul>
      </nav>
    </div>
  )
}


export default NavBar
