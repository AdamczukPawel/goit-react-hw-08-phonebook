import { Button, Card, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth.thunk';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <FormLabel>Username</FormLabel>
          <Input type="text" name="name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <Button colorScheme="blue" type="submit" marginTop="50px">
          Register
        </Button>
      </form>
    </Card>
  );
};
