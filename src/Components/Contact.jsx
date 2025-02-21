import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  SimpleGrid,
  Icon,
  Link,
  Text,
  Card,
  CardBody,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaHome, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTheme } from "@emotion/react";
const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phonenumber: "",
    user_email: "",

    message: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          setFormData({
            user_name: "",
            user_phonenumber: "",
            user_email: "",

            message: "",
          });
        },
        (error) => {
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <Box bg={"white"} overflowX={"hidden"}>
      <Container maxW="container.xl" px={{ base: 4, md: 8, lg: 20 }} py={10}>
        <Heading as="h2" textAlign="center" mb={1}>
          Contact Us or{" "}
          <Text as={"span"} color={"black"}>
            Inquiry
          </Text>
        </Heading>
        <Text textAlign="center" mb={6}>
          Your details will not be shared. Compulsory fields are marked.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Card bg="white" p={6} borderRadius="lg" boxShadow="dark-lg">
            <CardBody>
              <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Name *"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Mobile No.</FormLabel>
                  <Input
                    type="tel"
                    name="user_phonenumber"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={formData.user_phonenumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </FormControl>

                <VStack spacing={3} width="full">
                  <Button
                    type="submit"
                    bg={"green.500"}
                    color={"white"}
                    width="full"
                  >
                    Submit
                  </Button>
                  <Button
                    type="reset"
                    color={"black"}
                    bg={"white"}
                    width="full"
                    onClick={() =>
                      setFormData({
                        user_name: "",
                        user_phonenumber: "",
                        user_email: "",

                        message: "",
                      })
                    }
                  >
                    Reset
                  </Button>
                </VStack>
              </VStack>
            </CardBody>
          </Card>

          <Card p={6} bg="white" boxShadow={"dark-lg"}>
            <CardBody>
              <Heading as="h3" size="lg" mb={4}>
                Contact Us
              </Heading>
              <VStack align="start" spacing={"50px"}>
                <Flex alignItems="center">
                  <Box
                    bg="#00cbf3"
                    p={2}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaMapMarkerAlt} color="white" w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={0} ml={3}>
                    <Text fontWeight="bold">Address:</Text>
                    <Text>HomeVista, 305, Skyline Towers,</Text>
                    <Text>Plot No.- 120, City Center,</Text>
                    <Text>Metro Avenue, Pune- 411001</Text>
                  </VStack>
                </Flex>
                <Flex alignItems="center">
                  <Box
                    bg="#00cbf3"
                    p={2}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaPhoneAlt} color="white" w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={0} ml={3}>
                    <Text fontWeight="bold">Call us:</Text>
                    <Link href="tel:+919876543210">+91- 9876543210</Link>
                  </VStack>
                </Flex>
                <Flex alignItems="center">
                  <Box
                    bg="#f68c1f"
                    p={2}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaEnvelope} color="white" w={6} h={6} />
                  </Box>
                  <VStack align="start" spacing={0} ml={3}>
                    <Text fontWeight="bold">Email us:</Text>
                    <Link href="mailto:info@homevista.com">
                      info@homevista.com
                    </Link>
                  </VStack>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
