import { createSelector } from "@reduxjs/toolkit";

const loggedInInfoSelector = (state) => state.login;

const isLoggedInSelector = createSelector(
  loggedInInfoSelector,
  (login) => login.data.isLoggedIn || false
);

export { loggedInInfoSelector, isLoggedInSelector };
