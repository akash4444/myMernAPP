import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./NavLinks.css";
import { isLoggedInSelector } from "../../../selectors/loginSelectors";

const NavLinks = ({ isLoggedIn, logoutAPICall }) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <button onClick={() => logoutAPICall()}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedInSelector(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logoutAPICall: () => dispatch({ type: "LOGOUT_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
