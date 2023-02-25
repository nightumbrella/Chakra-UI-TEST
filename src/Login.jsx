import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GithubLogo from "./githubLogo";

const Login = () => {
  return (
    <Box>
      <VStack as="header" spacing="6" mt="8">
        <GithubLogo />
        <Heading
          as="h1"
          fontWeight="300"
          fontSize="24px"
          letterSpacing="-0.5px"
        >
          Sign in to GitHub
        </Heading>
      <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" maxW="308px">
        <FormControl>
          <FormLabel>Username or email address</FormLabel>
          <input
            bg="white"
            type="text"
            size="sm"
            
        />
        </FormControl>

        <FormControl>
          <HStack>
            <FormLabel>Password</FormLabel>
            <Button
              as="a"
              variant="link"
              href="#"
              fontSize="12px"
              color="#0969da"
              fontWeight="500"
            >
              Forgot password ?
            </Button>
          </HStack>

          <input
            bg="white"
            type="password"
            size="4xl"
          />
        </FormControl>
        <Button colorScheme="green" color="white" size="sm" _hover={{bg:"2974b"}} _active={{bg:"#2c974b"}}>
            Sign in
        </Button>
      </Card>
      </VStack>

    </Box>
  );
};

export default Login;
