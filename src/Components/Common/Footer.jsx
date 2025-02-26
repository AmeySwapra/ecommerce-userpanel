import { Box, Flex, Link, Text, VStack, HStack, Icon, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo/logo.jpg';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.400" py={10} px={5}>
      <Flex justify="space-between" flexWrap="wrap" maxW="1200px" mx="auto" align="start">
        {/* Logo Section */}
        <VStack align="start" spacing={2} maxW="250px">
          <Image src={logo} alt="Logo" boxSize="100px" />
          <Text fontSize="md">
            MyStore is your go-to destination for premium quality dry fruits. We offer a variety of fresh and organic nuts, dried fruits, and healthy snacks sourced from the best farms worldwide.
          </Text>
        </VStack>

        {/* About Section */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" color="white">ABOUT</Text>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </VStack>
        
        {/* Help Section */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" color="white">HELP</Text>
          <Link href="#">Payments</Link>
          <Link href="#">Shipping</Link>
          <Link href="#">Returns & Refunds</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Report an Issue</Link>
        </VStack>

        {/* Social Section */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" color="white">SOCIAL</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </HStack>
          <Text fontSize="md">Email: contact@mystore.com</Text>
          <Text fontSize="md">Phone: +1-234-567-890</Text>
          <Text fontSize="md">Office: 123 Nut Street, California, USA</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;