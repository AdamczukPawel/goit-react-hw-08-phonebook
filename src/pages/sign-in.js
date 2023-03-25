import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/auth/auth.thunk';
import { Button, Card, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signIn({
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );
    form.reset();
  };

  return (
    <Card
      padding="50px"
      align="center"
      maxWidth="fit-content"
      marginRight="auto"
      marginLeft="auto"
    >
      <form onSubmit={handleSubmit} autoComplete="off" align="center">
        <FormControl isRequired width="300px">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button colorScheme="blue" type="submit" marginTop="50px">
          Log in
        </Button>
      </form>
    </Card>
  );
};
