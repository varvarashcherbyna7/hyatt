import React from "react";
// import logo from "../images/logo.svg";
import logo from "../images/hyatt-hotels-1.svg";
import {FaAlignRight, FaTimes} from "react-icons/all";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <div className="nav-header-logo">
                                <img src={logo} alt="Beach Resort logo"/>
                            </div>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            {   !this.state.isOpen
                                ? <FaAlignRight className="nav-icon"/>
                                : <FaTimes className="nav-icon"/>
                            }
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms">
                                Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;