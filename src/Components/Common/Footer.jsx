import { Box, Flex, Link, Text, VStack, Divider, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.400" py={10} px={5}>
      <Flex justify="space-between" flexWrap="wrap" maxW="1200px" mx="auto">
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

        {/* Policy Section */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" color="white">POLICY</Text>
          <Link href="#">Return Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Security</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Sitemap</Link>
          <Link href="#">Compliance</Link>
        </VStack>

        {/* Social Section */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" color="white">SOCIAL</Text>
          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
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
        </VStack>
      </Flex>
      
      <Divider my={6} borderColor="gray.600" />
      
      
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        textAlign="center"
      >
        <VStack spacing={4}>
          <VStack spacing={2}>
            <Text fontWeight="bold" color="white">Mail Us:</Text>
            <Text fontSize="sm">
              DryFruits Delight Pvt. Ltd., Almond Street, Nut Valley, 123456, California, USA
            </Text>
          </VStack>

          <VStack spacing={2}>
            <Text fontWeight="bold" color="white">Registered Office Address:</Text>
            <Text fontSize="sm">
              DryFruits Delight Pvt. Ltd., Walnut Towers, Hazelnut Avenue, 123456, California, USA
            </Text>
            <Text fontSize="sm">CIN: U51109KA2012PTC066107</Text>
            <Text fontSize="sm">Telephone: +1-234-567-890</Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Footer;
