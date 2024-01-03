import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>



      <div className="container" >
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-3">
          <p className="col-md-4 mb-0 text-muted">&copy; All rights reserved</p>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Features</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
            {/* <li className="nav-item"><a href='https://rajnish07.web.app/' className="nav-link px-2 text-muted">About Developer</a></li> */}
          </ul>
        </footer>
      </div>
    </>
  )
}
