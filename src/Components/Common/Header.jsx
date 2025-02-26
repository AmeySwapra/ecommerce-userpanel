import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  VStack,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  // Update the cart count based on the number of distinct items in localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <Box bg="white" py={2} px={4} borderBottom="1px" borderColor="gray.200">
      <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
        {/* Logo */}
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Flex align="center">
            <Image src={logo} alt="Logo" height="80px" />
            <Text fontSize="xl" fontWeight="bold" color="green.500" ml={2}>
              MyStore
            </Text>
          </Flex>
        </Link>

        {/* Navigation Links - Hidden on Mobile */}
        <Flex align="center" gap={6} display={{ base: "none", md: "flex" }}>
          <Link
            href="/"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            About Us
          </Link>
          <Link
            href="/products"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            Products
          </Link>
          <Link
            href="/gallery"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            Gallery
          </Link>
          <Link
            href="/blogs"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            Blog
          </Link>
          <Link href="/contact" fontSize="18px" fontWeight="bold" color="gray.700" _hover={{ color: "green.500" }}>
            Contact
          </Link>
          <Link href="/cart" position="relative" _hover={{ color: "green.500" }}>
            <FaShoppingCart size={24} />
            <Badge
              position="absolute"
              top="-1"
              right="-1"
              bg="red.500"
              color="white"
              borderRadius="full"
              fontSize="0.8em"
              px={2}
            >
              {cartCount}
            </Badge>
          </Link>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onDrawerOpen}
          variant="outline"
          colorScheme="green"
        />

        {/* Login Button */}
        <Button
          colorScheme="green"
          variant="outline"
          onClick={onOpen}
          _hover={{ bg: "green.50" }}
          display={{ base: "none", md: "block" }}
        >
          Login
        </Button>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} mt={10} align="start">
              <Link href="/" onClick={onDrawerClose}>
                Home
              </Link>
              <Link href="/about" onClick={onDrawerClose}>
                About Us
              </Link>
              <Link href="/products" onClick={onDrawerClose}>
                Products
              </Link>
              <Link href="/gallery" onClick={onDrawerClose}>
                Gallery
              </Link>
              <Link href="/blogs" onClick={onDrawerClose}>
                Blog
              </Link>
              <Link href="/contact" onClick={onDrawerClose}>
                Contact
              </Link>
              <Link href="/cart" onClick={onDrawerClose} position="relative">
                <FaShoppingCart size={24} />
                <Badge
                  position="absolute"
                  top="-2px"
                  right="-8px"
                  bg="red.500"
                  color="white"
                  borderRadius="full"
                  fontSize="0.8em"
                  px={2}
                >
                  {cartCount}
                </Badge>
              </Link>
              <Button colorScheme="green" w="full" onClick={onOpen}>
                Login
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Login and Register Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Tabs index={tabIndex} onChange={handleTabChange}>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
            </Tabs>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs index={tabIndex} onChange={handleTabChange}>
              <TabPanels>
                {/* Login Form */}
                <TabPanel>
                  <VStack spacing={4}>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button colorScheme="green" w="full">
                      Login
                    </Button>
                  </VStack>
                </TabPanel>

                {/* Register Form */}
                <TabPanel>
                  <VStack spacing={4}>
                    <Input placeholder="Name" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button colorScheme="green" w="full">
                      Register
                    </Button>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
