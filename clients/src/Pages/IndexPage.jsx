import { useContext } from "react";
import { UserContext } from "./UserContext";

const IndexPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>index page here {user.name}</div>;
};
export default IndexPage;
