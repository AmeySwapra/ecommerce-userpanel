import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import emptycart from "../assets/images/emptycart.jpg";
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast({
      title: "Removed from Cart!",
      description: "Product has been removed.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  
  

  return (
    <Box maxW="100vw" mx="auto" py={10} px={{ base: 4, md: 8, lg: 24 }} bg="white">
      {cart.length === 0 ? (
        <VStack spacing={4} textAlign="center">
          <Image src={emptycart} alt="Empty Cart" boxSize="200px" objectFit="contain" />
          <Text fontSize="2xl" fontWeight="bold">
            Your Cart is Empty
          </Text>
          <Text color="green.500">Looks like you haven't added anything to your cart yet.</Text>
          <Link to={"/products"}>
            <Button color="white" bg={"green.500"} size="lg">
              Start Shopping
            </Button>
          </Link>
        </VStack>
      ) : (
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={6}>
          {/* Left Side: Cart Items Grid */}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              Your Cart
            </Text>
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {cart.map((product) => (
                <VStack
                  key={product.id}
                  bg="white"
                  p={4}
                  borderRadius="lg"
                  border="1px solid black"
                  boxShadow="lg"
                  spacing={3}
                  _hover={{ boxShadow: "lg", bg: "gray.50" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    boxSize="150px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Text fontWeight="bold" color="green.500">
                    {product.name}
                  </Text>
                  <Text fontSize="lg" color="green.500">
                    ₹{product.price} x {product.quantity}
                  </Text>
                  <Text fontSize="lg" color="green.500">
                    Total: ₹{product.price * product.quantity}
                  </Text>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </VStack>
              ))}
            </Grid>
          </Box>

          {/* Right Side: Order Summary */}
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="dark-lg">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Order Summary
            </Text>
            <VStack spacing={4} align="stretch">
              {cart.map((item) => (
                <HStack key={item.id} justifyContent="space-between">
                  <Text>
                    {item.name} (Qty: {item.quantity})
                  </Text>
                  <Text>₹{item.price * item.quantity}</Text>
                </HStack>
              ))}
              <HStack justifyContent="space-between" borderTopWidth="1px" pt={4}>
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">₹{totalPrice}</Text>
              </HStack>
              <Link to='/payments'>
              <Button
                colorScheme="green"
                size="lg"
                leftIcon={<FaShoppingCart />}
                isDisabled={cart.length === 0}
              >
                Checkout & Payments
              </Button>
              </Link>
            </VStack>
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;