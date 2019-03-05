import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li>
            Guess Text
                </li>
          <li>
            Score: # | Top Score: #
                </li>
        </ul>
      </nav>
    </div>
  )
}


export default NavBar
