const { createContext, useState } = require("react");

export const SellerContext = createContext(); //step 1
// export const updateContext = createContext(); //step 5-ish
//Don't send the setState variable and function at once - docs sya

const infoGlobal = {
  //If we want to change this we should useState
  m2: 125,
  price: 340000,
};

//const [sellerInfo, setSellerInfo] = useState(infoGlobal);

/* export const SellerProvider = ({ children }) => { */
export const SellerProvider = ({ children }) => {
  return (
    // <SellerContext.Provider value={infoGlobal}>
    <SellerContext.Provider value={infoGlobal}>
      {children}
      {/*   <updateContext.Provider value={setSellerInfo}>
        <p>HEY</p>
        {children}
      </updateContext.Provider> */}
    </SellerContext.Provider>
  );
};
