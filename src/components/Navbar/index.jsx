import React from 'react'
import PropTypes from 'prop-types';
import "./style.css"
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} border-bottom border-body  navbar-expand-lg`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/about">About</a>
        </li>
      </ul>
  <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}


// We Pass proptype becuae of restriction of data whether it is string or number
Navbar.propTypes={
    title:PropTypes.string
}


// This is default props if we not pass default props
Navbar.defaultProps={
    title:"I am default title"
}