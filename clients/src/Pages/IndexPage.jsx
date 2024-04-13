import { useContext } from "react";
import { UserContext } from "./UserContext";

const IndexPage = () => {
  const { user, setUset } = useContext(UserContext);
  console.log(user);
  return <div>index page here {user}</div>;
};
export default IndexPage;
