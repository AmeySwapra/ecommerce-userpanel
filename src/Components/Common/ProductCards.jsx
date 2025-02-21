import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "Almonds", price: 499, category: "Nuts", image: "https://logo.clearbit.com/almonds.com", link: "/almonds" },
  { id: 2, name: "Cashews", price: 599, category: "Nuts", image: "https://logo.clearbit.com/cashews.com", link: "/cashews" },
  { id: 3, name: "Walnuts", price: 699, category: "Nuts", image: "https://logo.clearbit.com/walnuts.com", link: "/walnuts" },
  { id: 4, name: "Pistachios", price: 799, category: "Nuts", image: "https://logo.clearbit.com/pistachios.com", link: "/pistachios" },
  { id: 5, name: "Raisins", price: 399, category: "Dried Fruits", image: "https://logo.clearbit.com/raisins.com", link: "/raisins" },
];

const ProductCards = () => {
  const navigate = useNavigate();

  

  return (
    <Box
      width="320px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      p="5"
      mt={8}
      ml={2}
      bg="white"
      border="2px solid green"
      boxShadow="xl"
    >
      <Text fontWeight="bold" fontSize="xl" mb="4" color="green.500" textAlign="center">
        Dry Fruits & Nuts
      </Text>
      {products.map((product) => (
        <Link to={'/products'}>
          <Box
          key={product.id}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow={'dark-lg'}
          overflow="hidden"
          cursor="pointer"
          p="3"
          mb="4"
          bg="white"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
        >
          <Flex>
            <Image
              src={product.image}
              alt={product.name}
              width="100px"
              height="100px"
              objectFit="cover"
              borderRadius="md"
              mr={4}
            />
            <Box>
              <Text fontWeight="bold" fontSize="sm" color="#1E3A8A">
                {product.name}
              </Text>
              <Text fontSize="xs" color="#DC2626" fontWeight="bold">
                ₹{product.price} per kg
              </Text>
              <Text fontSize="xs" color="gray.600">
                Category: {product.category}
              </Text>
            </Box>
          </Flex>
        </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ProductCards;