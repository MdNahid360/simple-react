import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div>
                                    <nav class="navbar navbar-expand-lg navbar-light  py-3  ">
                                      <div className="container">
                                      <h3 className="text-lg-left text-md-left text-center mx-lg-0 mx-md-0  mx-auto text-white">Player selector</h3>
                                      <ul className="list-unstyled d-lg-flex d-md-flex d-none">
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">
                                                  Home
                                              </a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">
                                                  About
                                              </a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">
                                                  Blog
                                              </a>
                                          </li>
                                          <li className="nav-item">
                                              <a className="nav-link" href="#">
                                                    Contact
                                              </a>
                                          </li>
                                      </ul>
                                    
                                      </div>
                                   </nav>
        </div>
    );
};

export default Header;