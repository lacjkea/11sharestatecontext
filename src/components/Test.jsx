import { useContext } from "react";
import { SellerContext, UpdateContext } from "../../contexts/sellerContext";

export default function Test() {
  const sellerInfo = useContext(SellerContext);
  const setSellerInfo = useContext(UpdateContext);
  //   console.log(sellerInfo);
  console.log("setSellerInfo", setSellerInfo);

  return (
    <div>
      {/* <span>Here: {sellerInfo.price}</span> */}
      <span>You're selling for: {sellerInfo}</span>
      <button onClick={() => setSellerInfo((prev) => prev + 1)}>
        Click me
      </button>
    </div>
  );
}
