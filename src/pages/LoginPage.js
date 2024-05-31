import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';

const LoginPage = ({ setIsAuthenticated }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = (data) => {
    if (data.username === 'surendra' && data.password === '12345') {
      localStorage.setItem('authenticated', 'true');
      setIsAuthenticated(true);
      navigate('/sale-orders');
    } else {
      toast({
        title: "Authentication failed.",
        description: "Invalid username or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...register('username', { required: true })} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password', { required: true })} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default LoginPage;