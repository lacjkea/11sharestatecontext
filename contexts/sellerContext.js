import { createContext, useReducer } from "react";

export const SellerContext = createContext(); //step 1
export const UpdateContext = createContext(); //step 5-ish
//Don't send the setState variable and function at once - docs sya

/* const infoGlobal = {
  //If we want to change this we should useState
  m2: 125,
  price: 340000,
}; */

// const infoGlobal = 42;

const initialState = {
  value: 0,
  name: "[Not logged in]",
  guests: [],
};
// const reducer = (state, action) => {
function reducer(state, action) {
  console.log(action);
  /* actions look like this: 
  {
    action: "ADD", 
    payload: "hello"
}
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
  console.log(action);
  if (action.action === "LOGIN") {
    // return { ...state, name: "Jonas" };
    return { ...state, name: action.payload };
  }
  if (action.action === "LOGOUT") {
    // return { ...state, name: "Jonas" };
    return { ...state, name: "LoggedOut" };
  }
}

/* export const SellerProvider = ({ children }) => { */
export const SellerProvider = ({ children }) => {
  const [sellerInfo, dispatch] = useReducer(reducer, initialState);

  return (
    // <SellerContext.Provider value={infoGlobal}>
    <SellerContext.Provider value={sellerInfo}>
      <UpdateContext.Provider value={dispatch}>
        <p>HEY</p>
        {children}
      </UpdateContext.Provider>
    </SellerContext.Provider>
  );
};
