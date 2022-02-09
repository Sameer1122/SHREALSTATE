import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SH Real Estate</title>
      </Head>
      <header>
        <Navbar />{" "}
      </header>
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
