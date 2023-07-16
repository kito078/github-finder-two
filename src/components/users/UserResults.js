import React, { useContext, useEffect, useState } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/GithubContext";

function UserResults() {
  const [loading, setLoading] = useState(true);

  const { users, getUsers } = useContext(GithubContext);
  console.log(users);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}

export default UserResults;
