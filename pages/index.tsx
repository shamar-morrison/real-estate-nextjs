import { PropertyInterface, HomeProps } from 'utils/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseURL, fetchAPI } from 'utils/fetchAPI';
import Property from 'components/Property';

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
      <Image src={imageURL} width={500} height={300} alt="banner" quality={'40'} />
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
        <Button fontSize={'xl'}>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

const Home = ({ propertiesForSale, propertiesForRent }: HomeProps) => {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for "
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageURL="/img-1.jpg"
      />
      <Flex flexWrap={'wrap'}>
        {propertiesForRent.map(item => (
          <Property property={item} key={item.id} />
        ))}
      </Flex>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your "
        title2="Own Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageURL="/img-2.jpg"
      />
      {propertiesForSale.map(item => (
        <Property property={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchAPI(
    `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
