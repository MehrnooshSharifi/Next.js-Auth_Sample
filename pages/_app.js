import LayOute from "../containers/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps :  { session, ...pageProps } }) {
  return (
    <SessionProvider  session={session}>
      <LayOute>
        <Component {...pageProps} />
      </LayOute>
    </SessionProvider>
  );
}

export default MyApp;
