import React, { useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import EditSaleOrderModal from '../components/EditSaleOrderModal';

const ActiveSaleOrders = () => {
  
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer_id: 11908,
      customer_name: 'Ram',
      items: [{ sku_id: 220, price: 12, quantity: 12 }],
      paid: false,
      invoice_no: 'Invoice - 1212121',
      invoice_date: '2024-05-07',
      last_modified: '2024-05-24'
    },
    {
      id: 2,
      customer_id: 11909,
      customer_name: 'Shyam',
      items: [{ sku_id: 221, price: 15, quantity: 10 }],
      paid: true,
      invoice_no: 'Invoice - 1212122',
      invoice_date: '2024-05-08',
      last_modified: '2024-05-25'
    }

  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const updateOrder = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    );
  };

  return (
    <Box>
      {orders.map(order => (
        <Flex key={order.id} mb={2} p={2} alignItems="center">
          <Text flex="1">{order.id}</Text>
          <Text flex="2">{order.customer_name}</Text>
          <Text flex="1">${order.items.reduce((total, item) => total + (item.price * item.quantity), 0)}</Text>
          <Text flex="2">{order.last_modified}</Text>
          <Button bg={'white'} onClick={() => handleEditClick(order)}>...</Button>
        </Flex>
      ))}
      {selectedOrder && (
        <EditSaleOrderModal
          order={selectedOrder}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          updateOrder={updateOrder}
        />
      )}
    </Box>
  );
};

export default ActiveSaleOrders;