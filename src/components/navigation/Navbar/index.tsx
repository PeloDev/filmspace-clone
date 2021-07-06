import React from "react";

import {
  Flex,
  Box,
  HStack,
  Spacer,
  Image,
  Text,
  Button
} from "@chakra-ui/react";

function Navbar() {
  return (
    <React.Fragment>
      <Flex p={4} borderBottom="1px solid #eae8e8" boxShadow="sm">
        <Box flex={1}>
          <Image src="https://filmspace.co.za/images/mint_logo.svg" />
        </Box>
        <Spacer flex={1} textAlign="right">
          <Box display="inline-block" mr="6">
            <Text
              fontSize="14px"
              fontWeight="700"
              _hover={{ borderBottom: "2px solid #000", cursor: "pointer" }}
            >
              Sign Up
            </Text>
          </Box>
          <Box display="inline-block" mr="6">
            <Text
              fontSize="14px"
              fontWeight="700"
              borderBottom="2px solid #000"
              _hover={{ borderBottom: "2px solid #000", cursor: "pointer" }}
            >
              Log in
            </Text>
          </Box>
          <Box display="inline-block" mr="6">
            <Text
              fontSize="14px"
              fontWeight="700"
              _hover={{ borderBottom: "2px solid #000", cursor: "pointer" }}
            >
              FAQs
            </Text>
          </Box>
          <Box display="inline-block" mr="6" >
            <Button p={4} bg="primary" _hover={{ background: "#54bb7f" }}>
              <Text color="white" fontSize="14px" fontWeight="700">
                List your space
              </Text>
            </Button>
          </Box>
        </Spacer>
      </Flex>
    </React.Fragment>
  );
}

export default Navbar;
