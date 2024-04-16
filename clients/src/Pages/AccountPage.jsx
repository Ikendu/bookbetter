import { useContext } from "react";
import { UserContext } from "./UserContext";

function AccountPage() {
  const { user } = useContext(UserContext);
  return <div> AccountPage for {user?.name}</div>;
}
export default AccountPage;
