import React, { FC } from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

interface UserListProps {
  items: Array<object>;
}

// type Items = {
//   id: string;
//   image: string;
//   name: string;
//   places: number;
// };
const UsersList: FC<UserListProps> = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user: any) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
