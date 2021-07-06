import * as React from "react";
import "./styles.css";

import theme from "./core/theme";

import { ChakraProvider } from "@chakra-ui/react";

import Routes from "./core/routes";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}
