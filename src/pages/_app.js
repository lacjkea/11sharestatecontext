import "@/styles/globals.css";
import { SellerProvider } from "../../contexts/sellerContext"; //step 2: tell the app about the context and use it below (wrap things that need to know about it the context)

export default function App({ Component, pageProps }) {
  return (
    <SellerProvider>
      <Component {...pageProps} />
    </SellerProvider>
  );
}
