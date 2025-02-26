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
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const gstAmount = subtotal * 0.18;
  const shippingCharges = 50;
  const serviceCharges = subtotal * 0.02;
  const finalTotal = subtotal + gstAmount + shippingCharges + serviceCharges;

  const customerDetails = {
    name: "John Doe",
    phone: "9876543210",
    address: "456, Elm Street, Mumbai, India",
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
  
   
    doc.addImage(logo, "JPEG", 10, 10, 30, 30);
    doc.setFontSize(14);
    doc.text("MyStore", 50, 15);
    doc.setFontSize(10);
    doc.text("GSTIN: 07ABCDE1234F1Z5", 50, 25);
    doc.text("123, Main Street, New Delhi, India", 50, 35);
  
    doc.setFontSize(12);
    doc.text(`Customer Name: ${customerDetails.name}`, 120, 15);
    doc.text(`Phone: ${customerDetails.phone}`, 120, 25);
    doc.text(`Address: ${customerDetails.address}`, 120, 35);
    doc.line(10, 45, 200, 45);
  
   
    doc.setFontSize(18);
    doc.text("Invoice", 90, 55);
    doc.line(10, 60, 200, 60);
  
   
    const tableData = cart.map((item) => [
      item.name,
      item.quantity,
      `${item.price}`,
      `${item.price * item.quantity}`,
    ]);
  
    doc.autoTable({
      startY: 65,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: tableData,
      theme: "striped",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] },
    });
  
   
    const finalY = doc.lastAutoTable.finalY + 10;
  
   
    doc.setFontSize(12);
    doc.text(`Subtotal: ${subtotal.toFixed(2)}`, 140, finalY);
    doc.text(`GST (18%): ${gstAmount.toFixed(2)}`, 140, finalY + 10);
    doc.text(`Shipping Charges: ${shippingCharges}`, 140, finalY + 20);
    doc.text(`Service Charges (2%): ${serviceCharges.toFixed(2)}`, 140, finalY + 30);
    doc.setFontSize(14);
    doc.text(`Final Total: ${finalTotal.toFixed(2)}`, 140, finalY + 40);
  
    doc.save("invoice.pdf");
  
    toast({
      title: "Invoice Generated!",
      description: "Your invoice has been downloaded.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-left",
    });
  };
  

  const handleCOD = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been placed via Cash on Delivery.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
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
      amount: finalTotal * 100,
      currency: "INR",
      name: "Books Checkout",
      description: "Test transaction for purchasing books",
      handler: function (response) {
        console.log("Payment successful:", response);
        localStorage.removeItem("cart");
        setCart([]);
      },
      prefill: {
        name: customerDetails.name,
        email: "john.doe@example.com",
        contact: customerDetails.phone,
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
            <HStack justifyContent="space-between">
              <Text>Subtotal</Text>
              <Text>₹{subtotal.toFixed(2)}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>GST (18%)</Text>
              <Text>₹{gstAmount.toFixed(2)}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Shipping Charges</Text>
              <Text>₹{shippingCharges}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Service Charges (2%)</Text>
              <Text>₹{serviceCharges.toFixed(2)}</Text>
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" pt={4}>
              <Text fontWeight="bold">Final Total</Text>
              <Text fontWeight="bold">₹{finalTotal.toFixed(2)}</Text>
            </HStack>
            <Divider />
            <Text fontSize="lg" fontWeight="bold">Customer Details:</Text>
            <Text>Name: {customerDetails.name}</Text>
            <Text>Phone: {customerDetails.phone}</Text>
            <Text>Address: {customerDetails.address}</Text>
          </VStack>
        </Box>

        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" w={{ base: "100%", md: "50%" }}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Choose Payment Method</Text>
          <VStack spacing={4}>
            <Button colorScheme="green" size="lg" w="full" onClick={handleCOD}>Cash on Delivery (COD)</Button>
            <Button colorScheme="blue" size="lg" w="full" onClick={handlePayment}>Pay Online</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Payment;
