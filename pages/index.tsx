import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


interface BannerProps {
  purpose: string;
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
  buttonText: string;
  linkName: string;
  imageURL: string;
}

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageURL,
}: BannerProps) => {
  return (
    <Flex flexWrap={'wrap'} justifyContent="center" alignItems={'center'} m="10">
      <Image src={imageURL} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize={'sm'} fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize={'3xl'} fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize={'lg'} paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize={'xl'} bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
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
