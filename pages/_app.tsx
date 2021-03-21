import { AppProps } from "next/app";
import MainLayout from "../layouts/Main";
import MyStore from "../store";
import "../styles/globals.scss";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <MyStore>
        <Component {...pageProps} />
      </MyStore>
  );
};
export default MyApp;
