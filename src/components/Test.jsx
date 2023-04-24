import { useContext } from "react";
import { SellerContext } from "../../contexts/sellerContext";

export default function Test() {
  const sellerInfo = useContext(SellerContext);
  console.log(sellerInfo);
  return (
    <div>
      <span>Here: {sellerInfo.price}</span>
    </div>
  );
}
