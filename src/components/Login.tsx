// import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { login } from "../services/login";


export const Login = ({children}: any) => {

  return (
      <Box minHeight="100vh" bg="#A332B3" p="25px" display="flex" alignItems="center" justifyContent="center">
        <Box bg="#FFFFFF" borderRadius="15px" w="300px" py="25px" px="15px" display="flex" flexDirection="column" alignItems="center">
          { children }
        </Box>
      </Box>
  );
};
