import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
    <div className="container-fluid">
      <i className="navbar-brand bi bi-justify-left"></i>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Admin
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </div>
          </li>
          <br />
        </ul>
      </div>
    </div>
  </nav>
</div>
  
  )
}

export default AdminNavbar