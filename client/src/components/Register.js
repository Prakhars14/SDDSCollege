import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contact:null,
      dateofbirth:null,
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      dateofbirth: this.state.dateofbirth,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  
  render() {
    const { errors } = this.state;
    
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          
            <Link to="/" className="btn-floating left waves-effect blue accent-3">
              <i className="material-icons">keyboard_backspace</i>
            </Link>
            <div className="col s8 offset-s2">
            <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> 
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.contact}
                  error={errors.contact}
                  id="contact"
                  type="number"
                  className={classnames("", {
                    invalid: errors.contact
                  })}
                />
                <label htmlFor="contact">Contact</label>
                <span className="red-text">{errors.contact}</span>
              </div>
              <div className="col s12">
                <span className="grey-text">Date of Birth &nbsp;</span>
                <div className="input-field inline">
                <input
                  onChange={this.onChange}
                  placeholder="01-01-12"
                  value={this.state.dateofbirth}
                  error={errors.dateofbirth}
                  id="dateofbirth"
                  type="date"
                  className={classnames("", {
                    invalid: errors.dateofbirth
                  })}
                />
                <span className="red-text">{errors.dateofbirth}</span>
              </div></div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable teal accent-4"
                >Create
                </button>
                <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{registerUser})(withRouter(Register));