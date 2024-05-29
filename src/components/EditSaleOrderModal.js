import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

const EditSaleOrderModal = ({ order, isOpen, onClose, updateOrder }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: order
  });

  const onSubmit = (data) => {
    updateOrder(data); // Update the order in the parent component
    onClose();
  };

  React.useEffect(() => {
    reset(order); // Reset the form values when the order changes
  }, [order, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="edit-order-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id', { required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register('invoice_no', { required: true })} />
            </FormControl>
            <FormControl>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" {...register('invoice_date', { required: true })} />
            </FormControl>
            {/* Add other form fields here */}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" type="submit" form="edit-order-form">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSaleOrderModal;