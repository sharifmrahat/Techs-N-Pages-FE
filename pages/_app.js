import "../styles/globals.css";
import Head from "next/head";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Techs N Pages | Technology Books App</title>
          <meta name="description" content="Tech Books Web App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menubar></Menubar>
        <Component {...pageProps} />
        <Footer></Footer>
      </QueryClientProvider>
    </>
  );

}

export default MyApp;
