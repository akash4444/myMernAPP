import React from "react";
import UserItem from "../components/userItem";
import UserList from "../components/userList";

const User = (): JSX.Element => {
  return (
    <div>
      User Page
      <UserItem />
      <UserList />
    </div>
  );
};

export default User;
