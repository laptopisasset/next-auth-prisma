import { FC } from "react";
import { AppProps } from "next/app";

import "../styles/tailwind.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
