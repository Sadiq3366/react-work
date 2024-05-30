import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{borderBottom: '1px solid'}}>
            <div className="container-fluid">
                <Link style={{ color: (props.mode === 'light') ? 'black' : 'white'}} className="navbar-brand" to="/">{props.Title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{color: (props.mode === 'light') ? 'black' : 'white'}}
                                  className="nav-link active" aria-current="page"
                                  to="/">{props.HomeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: (props.mode === 'light') ? 'black' : 'white'}} className="nav-link"
                                  to="/about">{props.AboutText}</Link>
                        </li>
                    </ul>
                    {/*<div className="form-check form-switch mx-3">*/}
                    {/*    <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch"*/}
                    {/*           id="flexSwitchCheckDefault"/>*/}
                    {/*    <label className={`form-check-label text-${(props.mode === 'light') ? 'black' : 'light'}`}  htmlFor="flexSwitchCheckDefault">{(props.mode === 'white') ? 'Switch Dark' : 'Switch Light'}</label>*/}
                    {/*</div>*/}
                    <div className="bg-success rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}} onClick={()=>props.changeMode('success')}></div>
                    <div className="bg-danger rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer' ,border: '1px solid white'}} onClick={()=>props.changeMode('danger')}></div>

                    <div className="bg-light rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black'}} onClick={()=>props.changeMode('light')}></div>

                    <div className="bg-dark rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}} onClick={()=>props.changeMode('dark')}></div>
                    <div className="bg-warning rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}} onClick={()=>props.changeMode('warning')}></div>
                    <div className="bg-info rounded mx-2"
                         style={{height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white'}} onClick={()=>props.changeMode('info')}></div>

                    {/*<form className="d-flex" role="search">*/}
                    {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                    {/*    <button className="btn btn-primary" type="submit">Search</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired,
    HomeText: PropTypes.string.isRequired,
}
// Navbar.defaultProps = {
//     Title: 'Utils',
//     AboutText: 'About us',
//     HomeText: 'Main',
// }
