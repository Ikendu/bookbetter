import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/profile");
      setUser(data);
      setReady(true);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
