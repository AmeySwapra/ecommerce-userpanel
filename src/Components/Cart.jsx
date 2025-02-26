import {
  Box,
  List,
  ListItem,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Divider,
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
  const gst = totalPrice * 0.18;
  const shippingCharge = 50;
  const serviceCharge = 30;
  const finalTotal = totalPrice + gst + shippingCharge + serviceCharge;

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
        <Box display={{ base: "block", md: "flex" }} gap={6}>
          {/* Left Side: Cart Items List */}
          <Box flex="2">
            <Text fontSize="2xl" fontWeight="bold" mb={6}>
              Your Cart
            </Text>
            <List spacing={4}>
              {cart.map((product) => (
                <ListItem key={product.id} p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
                  <HStack spacing={4}>
                    <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" borderRadius="md" />
                    <VStack align="start" spacing={1} flex={1}>
                      <Text fontWeight="bold" color="green.500">{product.name}</Text>
                      <Text fontSize="lg" color="green.500">₹{product.price} x {product.quantity}</Text>
                      <Text fontSize="lg" color="green.500">Total: ₹{product.price * product.quantity}</Text>
                      <Button size="sm" colorScheme="red" onClick={() => removeFromCart(product.id)}>
                        Remove
                      </Button>
                    </VStack>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Right Side: Order Summary */}
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" boxShadow="dark-lg">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Order Summary</Text>
            <VStack spacing={3} align="stretch">
              {cart.map((item) => (
                <HStack key={item.id} justifyContent="space-between">
                  <Text>{item.name} (Qty: {item.quantity})</Text>
                  <Text>₹{item.price * item.quantity}</Text>
                </HStack>
              ))}
              <Divider />
              <HStack justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>₹{totalPrice}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>GST (18%)</Text>
                <Text>₹{gst.toFixed(2)}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Shipping Charge</Text>
                <Text>₹{shippingCharge}</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>Service Charge</Text>
                <Text>₹{serviceCharge}</Text>
              </HStack>
              <Divider />
              <HStack justifyContent="space-between" borderTopWidth="1px" pt={4}>
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">₹{finalTotal.toFixed(2)}</Text>
              </HStack>
              <Link to='/payments'>
                <Button colorScheme="green" size="lg" leftIcon={<FaShoppingCart />} isDisabled={cart.length === 0}>
                  Checkout & Payments
                </Button>
              </Link>
            </VStack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
