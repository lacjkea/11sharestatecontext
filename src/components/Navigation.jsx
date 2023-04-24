import { useContext } from "react";
import { SellerContext, UpdateContext } from "../../contexts/sellerContext";

export default function Navigation() {
  const value = useContext(SellerContext);
  const dispatch = useContext(UpdateContext);
  function logout() {
    dispatch({
      action: "LOGOUT",
    });
  }
  return (
    <nav>
      Home smthing About basket: {value.name}
      <button onClick={logout}>Log out</button>
    </nav>
  );
}
