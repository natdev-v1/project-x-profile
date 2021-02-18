import { AppProps } from "next/app";
import MainLayout from "../layouts/Main";
import MyStore from "../store";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <MyStore>
        <Component {...pageProps} />
      </MyStore>
    </MainLayout>
  );
};
export default MyApp;
