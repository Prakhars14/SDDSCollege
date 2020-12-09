import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import cover from '../assets/images/cover.jpg';
import logo from '../assets/images/lgo.jpg';
import {Link, useLocation} from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header=(props)=>{
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggle = () => setIsOpen(!isOpen);
    return ( 
      <div>
        {/* <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "ABOUT ME", to: "/about" },
          { name: "ABOUT ME", to: "/about" },

        ]}
        social={[
        ]}
      /> */}  
      <img src={cover} alt="Cover Picture" className="banner"/>        
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            </NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto container d-flex spacearound" navbar>
            <NavItem>
              <Link className={location.pathname==="/"?"active":"nonactive"} to="/">Home</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="p-0 nonactive">
                About 
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  <Link className={location.pathname==="/about"?"active":"nonactive"} to="/about">About us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={location.pathname==="/objectives"?"active":"nonactive"} to="/objectives">Objectives</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={location.pathname==="/infrastructure"?"active":"nonactive"} to="/infrastructure">Infrastructure</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="p-0 nonactive">
                Admission
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem>
                  <Link className={location.pathname==="/apply"?"active":"nonactive"} to="/apply">Apply Online</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={location.pathname==="/admissionProcess"?"active":"nonactive"} to="/admissionProcess">Admission Process</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link className={location.pathname==="/results"?"active":"nonactive"} to="/results">Results</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link className={location.pathname==="/academics"?"active":"nonactive"} to="/academics">Academics</Link>
            </NavItem>
            <NavItem>
              <Link className={location.pathname==="/events"?"active":"nonactive"} to="/events">Events</Link>
            </NavItem>
            <NavItem>
              <Link className={location.pathname==="/faculty"?"active":"nonactive"} to="/faculty">Faculty</Link>
            </NavItem>
            <NavItem>
              <Link className={location.pathname==="/gallery"?"active":"nonactive"} to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem>
              <Link className={location.pathname==="/contact"?"active":"nonactive"} to="/contact">Contact</Link>
            </NavItem>
            {props&&props.auth.isAuthenticated?            
            <NavItem>
              <Link className={location.pathname==="/dashboard"?"active":"nonactive"} to="/dashboard">Dashboard</Link>
            </NavItem>:null}
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);