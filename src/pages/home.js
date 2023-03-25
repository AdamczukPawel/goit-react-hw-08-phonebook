import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Button,
  Stack,
} from '@chakra-ui/react';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Card align="center" maxWidth="75%" marginRight="auto" marginLeft="auto">
      <CardHeader>
        <Heading as="h1" size="2xl">
          Welcome to your phonebook app!
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="xl">
          Please sign in or register to make your own phonebook
        </Text>
        <Stack
          marginTop={10}
          spacing={10}
          direction="row"
          justifyContent="center"
          align="center
        "
        >
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => navigate('sign-in')}
          >
            I have account
          </Button>
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => navigate('register')}
          >
            I want to create account
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
