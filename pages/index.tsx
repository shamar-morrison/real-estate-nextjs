import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


interface BannerProps {
  purpose: string;
}

const Banner = ({ purpose }: BannerProps) => {
  return (
    <Flex flexWrap={'wrap'} justifyContent="center" alignItems={'center'} m="10">
      {purpose}
    </Flex>
  );
};

const Home = () => {
  return (
    <div>
      <Banner purpose="For Sale" />
      <Banner purpose="For Rent" />
    </div>
  );
};

export default Home;
