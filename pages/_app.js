import LayOute from "../containers/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LayOute>
      <Component {...pageProps} />
    </LayOute>
  );
}

export default MyApp;
