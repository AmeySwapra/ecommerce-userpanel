import React from 'react';
import { Box, Text, VStack, HStack, Grid, GridItem, Badge, Button } from '@chakra-ui/react';

const Profile = () => {

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+1234567890',
    address1: '123 Main St',
    address2: 'Apt 4B',
  };


  const successfulOrders = [
    { id: '1001', date: '2023-10-01', total: 150.0, status: 'Delivered' },
    { id: '1002', date: '2023-09-25', total: 75.5, status: 'Delivered' },
    { id: '1003', date: '2023-09-20', total: 200.0, status: 'Delivered' },
    { id: '1004', date: '2023-09-15', total: 50.0, status: 'Delivered' },
    { id: '1005', date: '2023-09-10', total: 300.0, status: 'Delivered' },
  ];


  const canceledOrders = [
    { id: '2001', date: '2023-08-05', total: 100.0, status: 'Canceled' },
    { id: '2002', date: '2023-07-20', total: 250.0, status: 'Canceled' },
    { id: '2003', date: '2023-07-10', total: 80.0, status: 'Canceled' },
  ];

  return (
    <Box p={5} maxW="900px" mx="auto">
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        {/* Profile Details Section */}
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <VStack align="start" spacing={4} p={4} bg={'whiteAlpha.600'} boxShadow={'dark-lg'} borderWidth="1px" borderRadius="lg">
            <HStack justify="space-between" w="full">
              <Text fontSize="2xl" fontWeight="bold">Profile Details</Text>
              <Button bg="red.500" color="white" _hover={{ bg: 'red.600' }}>Logout</Button>
            </HStack>
            <Box>
              <Text><strong>Name:</strong> {user.name}</Text>
              <Text><strong>Email:</strong> {user.email}</Text>
              <Text><strong>Mobile:</strong> {user.mobile}</Text>
              <Text><strong>Address 1:</strong> {user.address1}</Text>
              <Text><strong>Address 2:</strong> {user.address2}</Text>
            </Box>
          </VStack>
        </GridItem>

        {/* Successful Orders Section */}
        <GridItem>
          <Text fontSize="2xl" fontWeight="bold">Successful Orders</Text>
          {successfulOrders.map((order) => (
            <Box key={order.id} p={4} bg={'whiteAlpha.600'} boxShadow={'dark-lg'} borderWidth="1px" borderRadius="lg" mt={3}>
              <HStack justify="space-between">
                <Text><strong>Order ID:</strong> {order.id}</Text>
                <Badge colorScheme="green">{order.status}</Badge>
              </HStack>
              <Text><strong>Date:</strong> {order.date}</Text>
              <Text><strong>Total:</strong> ₹{order.total.toFixed(2)}</Text>
            </Box>
          ))}
        </GridItem>

        {/* Canceled Orders Section */}
        <GridItem>
          <Text fontSize="2xl" fontWeight="bold">Canceled Orders</Text>
          {canceledOrders.map((order) => (
            <Box key={order.id} p={4} borderWidth="1px" bg={'whiteAlpha.600'} boxShadow={'dark-lg'} borderRadius="lg" mt={3}>
              <HStack justify="space-between">
                <Text><strong>Order ID:</strong> {order.id}</Text>
                <Badge colorScheme="red">{order.status}</Badge>
              </HStack>
              <Text><strong>Date:</strong> {order.date}</Text>
              <Text><strong>Total:</strong> ₹{order.total.toFixed(2)}</Text>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;