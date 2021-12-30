import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Proptery";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="grey.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property by filters</Text>
        <Icon pl="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.lenght === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          my="5"
        >
          <Image
            alt="no-result"
            src={
              "https://media2.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif?cid=ecf05e47cz871cjo0z04y7ov6qnyg1o8u01ucvt2zt9nbcgs&rid=giphy.gif&ct=g"
            }
            width={500}
            height={300}
          />
          <Text fontSize="2xl" mt="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getStaticProps() {
  
  

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
    },
  };
}

export default Search;
