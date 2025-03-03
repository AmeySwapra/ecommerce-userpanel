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
  useToast,
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
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const toast = useToast();

  
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setIsLoggedIn(true); 
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
      onClose();
    } else {
      toast({
        title: "Invalid Email or Password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === registerEmail);

    if (userExists) {
      toast({
        title: "User already exists",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const newUser = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTabIndex(0); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    setIsLoggedIn(false); 
    toast({
      title: "Logged Out Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    });
  };

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

        {/* Desktop Navigation Links (shown only on large screens) */}
        <Flex align="center" gap={6} display={{ base: "none", lg: "flex" }}>
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
          <Link
            href="/contact"
            fontSize="18px"
            fontWeight="bold"
            color="gray.700"
            _hover={{ color: "green.500" }}
          >
            Contact
          </Link>
        </Flex>

        <Flex align="center" gap={6} display={{ base: "none", lg: "flex" }}>
          <Link href="/cart" position="relative" _hover={{ color: "green.500" }}>
            <FaShoppingCart size={24} />
            <Badge
              position="absolute"
              top="-2"
              right="-15"
              bg="red.500"
              color="white"
              borderRadius="full"
              fontSize="0.8em"
              px={2}
            >
              {cartCount}
            </Badge>
          </Link>

          {/* Conditionally render Login or Logout button */}
          {isLoggedIn ? (
            <Button
              colorScheme="green"
              variant="outline"
              onClick={handleLogout}
              _hover={{ bg: "green.50" }}
            >
              Logout
            </Button>
          ) : (
            <Button
              colorScheme="green"
              variant="outline"
              onClick={onOpen}
              _hover={{ bg: "green.50" }}
            >
              Login
            </Button>
          )}
        </Flex>

        <IconButton
          display={{ base: "flex", lg: "none" }}
          icon={<HamburgerIcon />}
          onClick={onDrawerOpen}
          variant="outline"
          colorScheme="green"
        />
      </Flex>

      {/* Mobile/Tablet Drawer */}
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
                Blogs
              </Link>
              <Link href="/contact" onClick={onDrawerClose}>
                Contact
              </Link>
              <Link href="/cart" onClick={onDrawerClose} position="relative">
                <FaShoppingCart size={24} />
                <Badge
                  position="absolute"
                  top="-8px"
                  right="-15px"
                  bg="red.500"
                  color="white"
                  borderRadius="full"
                  fontSize="0.8em"
                  px={2}
                >
                  {cartCount}
                </Badge>
              </Link>
              {/* Conditionally render Login or Logout button in the drawer */}
              {isLoggedIn ? (
                <Button colorScheme="green" w="full" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button colorScheme="green" w="full" onClick={onOpen}>
                  Login
                </Button>
              )}
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
                    <Input
                      placeholder="Email"
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <Button colorScheme="green" w="full" onClick={handleLogin}>
                      Login
                    </Button>
                  </VStack>
                </TabPanel>

                {/* Register Form */}
                <TabPanel>
                  <VStack spacing={4}>
                    <Input
                      placeholder="Name"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                    <Button
                      colorScheme="green"
                      w="full"
                      onClick={handleRegister}
                    >
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