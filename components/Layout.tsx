import { Box } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box maxWidth={'1280px'} m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
