import { useEffect } from "react";
import "../styles/variables.scss";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return <Component {...pageProps} />;
}
