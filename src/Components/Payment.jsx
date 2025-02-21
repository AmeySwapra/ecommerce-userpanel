import {
    Box,
    Button,
    HStack,
    Text,
    VStack,
    useToast,
    Divider,
  } from "@chakra-ui/react";
 import jsPDF from "jspdf";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const Payment = ({ initiateRazorpayPayment }) => {
    const [cart, setCart] = useState([]);
    const toast = useToast();
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);
  
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const generateInvoice = () => {
        const doc = new jsPDF();
    
        
        doc.setFontSize(18);
        doc.text("Invoice", 10, 10);
    
        
        doc.setFontSize(12);
        let yPos = 20;
        cart.forEach((item, index) => {
          doc.text(
            `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`,
            10,
            yPos
          );
          yPos += 10;
        });
    
        
        doc.setFontSize(14);
        doc.text(`Total: ₹${totalPrice}`, 10, yPos + 10);
    
      
        doc.save("invoice.pdf");
    
   
        toast({
          title: "Invoice Generated!",
          description: "Your invoice has been downloaded.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      };
  
    const handleCOD = () => {
      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been placed via Cash on Delivery.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("cart");
      setTimeout(() => { generateInvoice(); navigate("/"); }, 2000);
    };

    const handlePayment = async () => {
        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
          alert(
            "Failed to load Razorpay SDK. Please check your internet connection."
          );
          return;
        }
       
    
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY, 
          amount: totalPrice * 100,
          currency: "INR",
          name: "Books Checkout",
          description: "Test transaction for purchasing books",
          handler: function (response) {
            setIsPaymentSuccessful(true);
            console.log("Payment successful:", response);
            localStorage.removeItem("userCart");
            setCartItems([]);
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzp = new window.Razorpay(options);
        rzp.open();
        localStorage.removeItem("cart");
        setTimeout(() => { generateInvoice(); navigate("/"); }, 2000);
        rzp.on("payment.failed", function (response) {
          setIsPaymentSuccessful(false);
          console.log("Payment failed:", response.error);
        });
      };
  
    return (
      <Box maxW="100vw" mx="auto" py={10} px={{ base: 4, md: 8, lg: 24 }}>
        <HStack spacing={10} align="start" flexWrap={{ base: "wrap", md: "nowrap" }}>
          {/* Order Summary */}
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" w={{ base: "100%", md: "50%" }}>
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
              <Divider />
              <HStack justifyContent="space-between" borderTopWidth="1px" pt={4}>
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">₹{totalPrice}</Text>
              </HStack>
            </VStack>
          </Box>
  
          {/* Payment Options */}
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" w={{ base: "100%", md: "50%" }}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              Choose Payment Method
            </Text>
            <VStack spacing={4}>
              <Button colorScheme="green" size="lg" w="full" onClick={handleCOD}>
                Cash on Delivery (COD)
              </Button>
              <Button
                colorScheme="blue"
                size="lg"
                w="full"
                onClick={handlePayment} 
              >
                Pay Online
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Box>
    );
  };
  
  export default Payment;
  