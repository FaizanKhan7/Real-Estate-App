import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from "millify";

import DefaultImage from "../assets/images/home.jpg";

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => {
    const scaleUp = (e) => {
        e.target.style.transform = 'scale(1.1)'
        e.target.style.transition = 'all 0.9s ease 0s'
    }
    const scaleDown = (e) => {
        e.target.style.transform = 'scale(1)'
        e.target.style.transition = 'all 0.9s ease 0s'
    }
    return (

        <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' pt='0' pb='8' justifyContent='flex-start' m="0 auto" cursor='pointer' >
            <Box borderRadius='md' overflow='hidden' onMouseOver={scaleUp} onMouseOut={scaleDown}>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="home" placeholder="blur" blurDataURL={coverPhoto ? coverPhoto.url : DefaultImage}/>
            </Box>
            <Box w='full' >
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                            <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {title.length > 30 ? title.substring(0, 40) + '...' : title}
        </Text>
            </Box>
        </Flex>
    </Link>
        )
        }

export default Property;