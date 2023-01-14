import "../styles/globals.css";
import Head from "next/head";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from '../context/AuthProvider'


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Techs N Pages | Technology Books App</title>
          <meta name="Website for technology books" content="Tech Books Web App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menubar></Menubar>
        <Component {...pageProps} />
        <Footer></Footer>
      </QueryClientProvider>
      </AuthProvider>
    </>
  );

}

export default MyApp;
