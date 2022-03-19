import React from 'react';
import { PropertyInterface } from 'utils/interfaces';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

interface Props {
  property: PropertyInterface;
}

const Property = ({
  property: { externalID, coverPhoto, agency, area, baths, title, isVerified, rooms },
}: Props) => {
  return (
    <div>
      <Link href={`/property/${externalID}`} passHref>
        <Flex
          flexWrap={'wrap'}
          w="420px"
          p="5"
          paddingTop="0"
          justifyContent={'flex-start'}
          cursor="pointer"
        ></Flex>
        <Foo />
      </Link>
    </div>
  );
};

export default Property;
