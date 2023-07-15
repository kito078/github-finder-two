import React, { useEffect } from "react";

function UserResults() {
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await fetch(`${process.env.REACT_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    console.log(data);
  };
  return <div></div>;
}

export default UserResults;
