import React from 'react';
import { PropertyInterface } from 'utils/interfaces';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
// import { GoVerified } from 'react-icons/goverified';
import millify from 'millify';

interface Props {
  property: PropertyInterface;
}

const Property = ({ property: { externalID } }: Props) => {
  return (
    <div>
      <Link href={`/property/${externalID}`}></Link>
    </div>
  );
};

export default Property;
