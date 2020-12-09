import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from 'classnames';
import { logoutUser } from "../actions/authActions";
import {Container, Row , Col, Nav, NavItem, NavLink, TabContent, TabPane, Button} from "reactstrap";
import HomeAdmin from "./HomeAdmin";
import FacultyAdmin from "./FacultyAdmin";
import AcademicsAdmin from "./AcademicsAdmin";
import Applications from "./Applications";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  state={
    open:false,
    activeTab:1
  }
  render() {
    return (
      <>
       {/* <button onClick={this.onLogoutClick}>Logout</button> */}
       <Container className="mt-5 mb-5">
         <Row>
           <Col>
           <h2>Dashboard</h2>
           </Col>
           <Col>
           <Button onClick={this.onLogoutClick} outline color="primary" className="float-right">Logout</Button>
           </Col>
         </Row>
         <Nav className="bg-light nav nav-pills navtab-bg nav-justified mt-2">
            <NavItem>
                <NavLink
                    href="#"
                    className={classNames({ active: this.state.activeTab === 1 })}
                    onClick={() => this.setState({activeTab:1})}
                >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    href="#"
                    className={classNames({ active: this.state.activeTab === 2 })}
                    onClick={() => this.setState({activeTab:2})}
                >Applications</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    href="#"
                    className={classNames({ active:this.state.activeTab === 3 })}
                    onClick={() => this.setState({activeTab:3})}
                >Faculty</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    href="#"
                    className={classNames({ active:this.state.activeTab === 4 })}
                    onClick={() => this.setState({activeTab:4})}
                >Academics</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="mt-5">
              <TabPane tabId={1}>
                  {this.state.activeTab===1?<HomeAdmin/>:null}
              </TabPane>
              <TabPane tabId={2}>
                  {this.state.activeTab===2?<Applications/>:null}
              </TabPane>
              <TabPane tabId={3}>
                  {this.state.activeTab===3?<FacultyAdmin/>:null}
              </TabPane>
              <TabPane tabId={4}>
                  {this.state.activeTab===4?<AcademicsAdmin/>:null}
              </TabPane>
          </TabContent>
       </Container>
    </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(Dashboard);