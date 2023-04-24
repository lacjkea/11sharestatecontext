import { useContext } from "react";
import { SellerContext } from "../../contexts/sellerContext";

export default function Navigation() {
  const value = useContext(SellerContext);

  return <nav>Home smthing About basket: {value}</nav>;
}
