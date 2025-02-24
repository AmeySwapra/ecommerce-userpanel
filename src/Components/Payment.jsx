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
import "jspdf-autotable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.jpg";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Payment = () => {
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

    doc.addImage(logo, "JPEG", 10, 10, 30, 30);

    doc.setFontSize(14);
    doc.text("MyStore", 50, 20);
    doc.setFontSize(10);
    doc.text("GSTIN: 07ABCDE1234F1Z5", 50, 30);
    doc.text("123, Main Street, New Delhi, India", 50, 40);

    doc.setDrawColor(0);
    doc.line(10, 50, 200, 50);

    const customerName = "John Doe";
    const customerNumber = "9876543210";
    doc.setFontSize(12);
    doc.text(`Customer Name: ${customerName}`, 10, 60);
    doc.text(`Customer Number: ${customerNumber}`, 10, 70);
    doc.text("Shipping Address: 456, Elm Street, Mumbai, India", 10, 80);

    doc.line(10, 90, 200, 90);

    doc.setFontSize(18);
    doc.text("Invoice", 10, 100);

    doc.line(10, 105, 200, 105);

    const tableData = cart.map((item) => [
      item.name,
      item.quantity,
      `₹${item.price}`,
      `₹${item.price * item.quantity}`,
    ]);

    doc.autoTable({
      startY: 110,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: tableData,
      theme: "striped",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(14);
    doc.text(`Final Total: ₹${totalPrice}`, 10, finalY + 10);

    doc.save("invoice.pdf");

    toast({
      title: "Invoice Generated!",
      description: "Your invoice has been downloaded.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position : 'top-left'
    });
  };

  const handleCOD = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been placed via Cash on Delivery.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    });
    localStorage.removeItem("cart");
    setTimeout(() => {
      generateInvoice();
      navigate("/");
    }, 2000);
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
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
        localStorage.removeItem("cart");
        setCart([]);
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
    setTimeout(() => {
      generateInvoice();
      navigate("/");
    }, 2000);
    rzp.on("payment.failed", function (response) {
      setIsPaymentSuccessful(false);
      console.log("Payment failed:", response.error);
    });
  };

  return (
    <Box maxW="100vw" mx="auto" py={10} px={{ base: 4, md: 8, lg: 24 }}>
      <HStack spacing={10} align="start" flexWrap={{ base: "wrap", md: "nowrap" }}>
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

        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" w={{ base: "100%", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Choose Payment Method
          </Text>
          <VStack spacing={4}>
            <Button colorScheme="green" size="lg" w="full" onClick={handleCOD}>
              Cash on Delivery (COD)
            </Button>
            <Button colorScheme="blue" size="lg" w="full" onClick={handlePayment}>
              Pay Online
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Payment;