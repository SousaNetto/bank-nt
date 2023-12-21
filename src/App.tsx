import { Layout } from "./components/Layout/Layout";
import styled from "styled-components";
import { 
  Center,
  ChakraProvider,
  Input
 } from "@chakra-ui/react";
import { useState } from "react";

function App() {

  return (
    <ChakraProvider>
      <Layout>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
