import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ childern }) => {
  const [user, setUsser] = React.useState(null);
  return <UserContext.Provider value= {{user,setUsser}}>{childern}</UserContext.Provider>;
};

export default UserContextProvider;
