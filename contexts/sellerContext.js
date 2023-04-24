const { createContext, useReducer } = require("react");

export const SellerContext = createContext(); //step 1
export const UpdateContext = createContext(); //step 5-ish
//Don't send the setState variable and function at once - docs sya

/* const infoGlobal = {
  //If we want to change this we should useState
  m2: 125,
  price: 340000,
}; */

const infoGlobal = 42;
import { useReducer } from "react";

const initialState = {
  value: 0,
};
// const reducer = (state, action) => {
function reducer(state, action) {
  console.log(action);
  /*  switch (action.type) {
    case "INCREASE":
      return {
        value: state.value + 1,
      };
    case "DECREASE":
      return {
        value: state.value - 1,
      };
    default:
      return state; 
  }*/
}

/* export const SellerProvider = ({ children }) => { */
export const SellerProvider = ({ children }) => {
  const [sellerInfo, setSellerInfo] = useState(infoGlobal);

  return (
    // <SellerContext.Provider value={infoGlobal}>
    <SellerContext.Provider value={sellerInfo}>
      <UpdateContext.Provider value={setSellerInfo}>
        <p>HEY</p>
        {children}
      </UpdateContext.Provider>
    </SellerContext.Provider>
  );
};
