import { useContext } from "react";
import { SellerContext, UpdateContext } from "../../contexts/sellerContext";

export default function Test() {
  const sellerInfo = useContext(SellerContext);
  const dispatch = useContext(UpdateContext);
  //   console.log(sellerInfo);
  //   console.log("setSellerInfo", setSellerInfo);

  function handleLogin() {
    dispatch({
      action: "LOGIN",
      payload: "Bo",
    });
    
  }

  return (
    <div>
      {/* <span>Here: {sellerInfo.price}</span> */}
      <span>You're selling for: {sellerInfo.name}</span>
      <button onClick={handleLogin}>LOGIN</button>

      {/*     <button onClick={() => setSellerInfo((prev) => prev + 1)}>
        Click me
      </button> */}
    </div>
  );
}
