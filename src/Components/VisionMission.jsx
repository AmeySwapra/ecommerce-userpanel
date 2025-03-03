import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Icon, Button } from "@chakra-ui/react";
import { FaEye, FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const VisionMission = () => {

    const theme = useTheme()
  return (
    <Box bg={theme.colors.bg} py={16}>
      <Container maxW="container.lg">
        <Heading as="h2" fontSize="4xl" textAlign="center" mb={10} color="#333">
          Our <Text as="span" color={theme.colors.text}>Vision & Mission</Text>
        </Heading>

        <HStack spacing={12} align="stretch" flexDir={{ base: "column", md: "row" }}>
          {/* Vision Section */}
          <VStack
            p={8}
            bg="white"
            borderRadius="xl"
            boxShadow="dark-lg"
            spacing={5}
            align="center"
            textAlign="center"
            flex="1"
            transition="0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <Icon as={FaEye} w={14} h={14} color={theme.colors.text} />
            <Heading as="h3" fontSize="2xl" color="#333">
              Our Vision
            </Heading>
            <Text fontSize="md" color="#555">
              At <strong>MyStore</strong>, we strive to be the leading provider of premium quality dry fruits,
              ensuring each product is packed with natural goodness. Our vision is to promote a healthier lifestyle 
              by making nutritious, preservative-free dry fruits accessible to all, while maintaining sustainability 
              and excellence in quality.
            </Text>
            <Link to="/products">
              <Button bg={theme.colors.text} color="white" _hover={{ bg: "#b86604" }}>
                Explore Our Products
              </Button>
            </Link>
          </VStack>

          {/* Mission Section */}
          <VStack
            p={8}
            bg="white"
            borderRadius="xl"
            boxShadow="dark-lg"
            spacing={5}
            align="center"
            textAlign="center"
            flex="1"
            transition="0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <Icon as={FaBullseye} w={14} h={14} color={theme.colors.text} />
            <Heading as="h3" fontSize="2xl" color="#333">
              Our Mission
            </Heading>
            <Text fontSize="md" color="#555">
              Our mission is to provide handpicked, high-quality dry fruits sourced ethically from the best farms worldwide. 
              We are dedicated to ensuring freshness, flavor, and nutritional value in every bite. Through innovation, sustainability, 
              and customer satisfaction, we aim to redefine the standards of premium snacking.
            </Text>
            <Link to="/blogs">
              <Button bg={theme.colors.text} color="white" _hover={{ bg: "#b86604" }}>
                Read Our Blog
              </Button>
            </Link>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default VisionMission;
