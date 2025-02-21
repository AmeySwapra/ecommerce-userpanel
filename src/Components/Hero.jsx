import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import star from "../assets/bg/star.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import dryfruit from "../assets/images/dryfruits.jpg";
import dry from "../assets/images/dry.jpg";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box bg="bg" py={10} overflowX={"hidden"}>
      <Container maxW="6xl" overflow="hidden">
        <Flex direction={{ base: "column", lg: "row" }} align="center">
          {/* Left Section */}
          <Box flex={1} pr={{ lg: 10 }}>
            <Flex>
              <VStack spacing={4} align="stretch">
                <Box
                  bg="text"
                  color="white"
                  textAlign="center"
                  p={3}
                  borderRadius="lg"
                  w="100%"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    10+ Years Of
                  </Text>
                  <Text fontSize="xl">Quality & Trust</Text>
                </Box>
                <Image
                  src={dryfruit}
                  borderRadius="lg"
                  alt="Premium Dry Fruits"
                  w="100%"
                  maxH="400px"
                  objectFit="cover"
                />
              </VStack>
              <VStack spacing={4} align="stretch" ml={4}>
                <Image
                  src={dry}
                  borderRadius="lg"
                  alt="Fresh Nuts Collection"
                  w="100%"
                  minH="250px"
                  objectFit="cover"
                />
              </VStack>
            </Flex>
          </Box>

          {/* Right Section */}
          <Box flex={1} pl={{ lg: 10 }}>
            <Heading as="h2" fontSize="4xl" color="black" mb={4}>
              <Text as="span" fontSize="5xl" color="text">
                MyStore
              </Text>{" "}
              - Your Trusted Dry Fruits & Nuts Store
            </Heading>
            <Text fontSize="lg" fontWeight="bold" color="text">
              Premium Quality Dry Fruits, Handpicked Nuts, and Healthy Snacks
            </Text>
            <Text fontSize="md" color="secondary" mt={3}>
              At MyStore, we bring you the finest selection of dry fruits and
              nuts, sourced from the best farms. Enjoy the goodness of nature
              with our 100% fresh, organic, and preservative-free products.
              Whether you need a healthy snack or a gift for your loved ones,
              MyStore has got you covered!
            </Text>
            <Text fontSize="md" mt={3} fontWeight="bold" color="secondary">
              Shop Now and Experience the Taste of Purity!
            </Text>
            <Link to={"/products"}>
              <Button
                bg={theme.colors.text}
                size="lg"
                _hover={{ bg: "hover" }}
                color="white"
                mt={2}
                
              >
                Explore Our Products
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
