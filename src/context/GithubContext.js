import React, { createContext, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    // setData(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  return (
    <GithubContext.Provider value={{ users: state.users, getUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
