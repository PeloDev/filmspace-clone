import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Center,
  Text,
  Input,
  Image,
  Checkbox,
  Button,
  Flex
} from "@chakra-ui/react";
import FacebookIcon from "@material-ui/icons/Facebook";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";

export default function () {
  const history = useHistory();

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  });
  const [areCredentialsInput, setAreCredentialsInput] = useState(false);

  function handleChange(event: { target: { value: string; name: string } }) {
    const { value, name } = event.target;
    setLoginCredentials((prevVal) => {
      const tempVal = {
        ...prevVal,
        [name]: value
      };
      //console.log(tempVal);
      setAreCredentialsInput(
        tempVal.email.length > 0 && tempVal.password.length > 0
      );
      return tempVal;
    });
  }

  function handleSubmit(event: any) {
    console.log("clicked!");
    console.log(loginCredentials);
    history.push("/inbox");
  }

  return (
    <React.Fragment>
      <Navbar />
      <Center>
        <Box
          width="380px"
          my="5%"
          mx="10%"
          p={6}
          boxShadow="xl"
          borderRadius="sm"
        >
          <Text m={4} textAlign="center" fontWeight="bold">
            Log in to continue
          </Text>
          <hr />

          <Box my={4}>
            <Input
              name="email"
              type="emailAddress"
              placeholder="Email Address"
              mb={5}
              variant="outline"
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              mb={5}
              variant="outline"
              onChange={handleChange}
            />

            <Checkbox mb={5}>Remember me</Checkbox>

            <Button
              _hover={areCredentialsInput ? { background: "#54bb7f" } : {}}
              isDisabled={!areCredentialsInput}
              bg="primary"
              mb={5}
              p={5}
              w="100%"
              onClick={handleSubmit}
            >
              <Text fontWeight="400" color="white">
                Log In
              </Text>
            </Button>

            <Text fontWeight="bold" color="primary" textAlign="center" mb={5}>
              Forgot password ?
            </Text>

            <Flex textAlign="center" mb={5}>
              <Box flex={6} paddingTop="14px">
                <hr style={{ margin: 0 }} />
              </Box>
              <Box flex={1}>
                <Text>or</Text>
              </Box>
              <Box flex={6} paddingTop="14px">
                <hr style={{ margin: 0 }} />
              </Box>
            </Flex>

            <Button
              _hover={{ backgroundColor: "#2e487a" }}
              _focus={{ background: "#2e487a" }}
              _active={{ background: "#2e487a" }}
              justifyContent="left"
              bg="facebook"
              color="white"
              mb={5}
              w="100%"
              p={0}
            >
              <Center
                bg="rgba(0, 0, 0, 0.2)"
                width="48px"
                height="100%"
                borderTopLeftRadius="5px"
                borderBottomLeftRadius="5px"
              >
                <FacebookIcon />
              </Center>
              <Text fontWeight="500" w="100%">
                Continue with Facebook
              </Text>
            </Button>
            <Button
              _hover={{ backgroundColor: "#ce2516" }}
              _focus={{ background: "#ce2516" }}
              _active={{ background: "#ce2516" }}
              justifyContent="left"
              bg="google"
              color="white"
              mb={5}
              w="100%"
              p={0}
            >
              <Center
                bg="rgba(0, 0, 0, 0.2)"
                width="48px"
                height="100%"
                borderTopLeftRadius="5px"
                borderBottomLeftRadius="5px"
              >
                <Image
                  p={3}
                  src="https://img.icons8.com/windows/32/FFFFFF/google-logo.png"
                />
              </Center>
              <Text fontWeight="500" w="100%">
                Continue with Google
              </Text>
            </Button>

            <Box textAlign="center">
              <Text fontWeight="bold" textAlign="center" display="inline-block">
                Don't have an account ?
              </Text>
              <Text
                fontWeight="bold"
                textAlign="center"
                display="inline-block"
                ml={2}
                color="primary"
              >
                Sign up
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
      <Footer />
    </React.Fragment>
  );
}
