import { AppProps } from "next/app";
import MainLayout from "../layouts/Main";
import  '../styles/globals.css'
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};
export default MyApp;
