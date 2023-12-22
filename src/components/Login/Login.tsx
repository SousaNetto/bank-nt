// import styled from "styled-components";
import { Box, Center, Input, Button } from "@chakra-ui/react";
import { login } from "../../services/login";
import { useState } from "react";

export const Login = () => {
  const [ email, setEmail ] = useState('')

  return (
      <Box minHeight="100vh" bg="#A332B3" p="25px" display="flex" alignItems="center" justifyContent="center">
        <Box bg="#FFFFFF" borderRadius="15px" w="300px" py="25px" px="15px" display="flex" flexDirection="column" alignItems="center">
          <Center fontSize="1.2rem" fontWeight="bold" marginBottom="25px">
            <h1>Faça o login</h1>
          </Center>
          <Input type="email" placeholder="Email" mb="15px" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Input type="password" placeholder="Password" mb="15px"/>
            <Button onClick={() => login(email)} bg="#A332B3" color="#FFF" size="sm" w='100%'>
              Entrar
            </Button>
        </Box>
      </Box>
  );
};
