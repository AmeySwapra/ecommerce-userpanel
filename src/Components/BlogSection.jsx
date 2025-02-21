import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import dryfruit from "../assets/images/dryfruits.jpg";
import dry from "../assets/images/dry.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Health Benefits of Eating Dry Fruits Daily",
    image: dryfruit,
    overview:
      "Dry fruits are packed with nutrients and offer numerous health benefits. Here are the top 5 reasons to include them in your daily diet.",
  },
  {
    id: 2,
    title: "How to Store Dry Fruits to Maintain Freshness",
    image: dry,
    overview:
      "Proper storage is key to preserving the freshness and nutritional value of dry fruits. Learn the best storage tips here.",
  },
  {
    id: 3,
    title: "The Pros and Cons of Including Nuts in Your Diet",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvxbtw5kEkxbm4liS2g8gzxKB2BBjYQQ2cA&s",
    overview:
      "Nuts are a healthy snack, but they come with their own set of advantages and disadvantages. Here’s what you need to know.",
  },
];

const BlogSection = () => {
  return (
    <Box py={10} >
      <Container maxW="6xl">
        <Heading textAlign="center" mb={6} color="green.500">
          Recent Blogs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                objectFit="cover"
                h="200px"
                w="100%"
              />
              <CardBody>
                <VStack spacing={3} align="start">
                  <Heading size="md" color="gray.800">
                    {post.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {post.overview}
                  </Text>
                  <Flex justify="flex-end" mt="auto">
                    <Link to={`/blog/${post.title}`}>
                      <Button color="white" bg="green.500" size="md">
                        Read More...
                      </Button>
                    </Link>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* View Blog Button at the Bottom */}
        <Center mt={6}>
          <Link to="/blogs">
            <Button
              bg={"green.500"}
              size="lg"
              _hover={{ bg: "hover" }}
              color="white"
              mt={2}
            >
              View All Blogs
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default BlogSection;
