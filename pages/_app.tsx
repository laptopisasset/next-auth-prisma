import { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";

import "../styles/tailwind.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
