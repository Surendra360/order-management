import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';

const CreateSaleOrderModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Simulate API call
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>+ Sale Order</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-order-form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Customer ID</FormLabel>
                <Input {...register('customer_id', { required: true })} />
                <FormLabel>Customer Name</FormLabel>
                <Input {...register('customer_id', { required: true })} />
                <FormLabel>Price</FormLabel>
                <Input {...register('customer_id', { required: true })} />
    
              </FormControl>
              {/* Add other form fields */}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit" form="create-order-form">Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSaleOrderModal;