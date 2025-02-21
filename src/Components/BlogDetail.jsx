import { Box, Heading, Image, Text, Container } from "@chakra-ui/react";

const BlogDetail = ({ filteredBlogs }) => {
  if (!filteredBlogs || filteredBlogs.length === 0) {
    return <Text textAlign="center" mt={10}>Blog not found.</Text>;
  }

  const blog = filteredBlogs[0];

  return (
    <Container maxW="container.md" py={10}>
      <Box mb={10}>
        <Heading as="h1" size="xl" mb={4}>
          {blog.title}
        </Heading>
        <Image src={blog.image} alt={blog.title} align={'center'} borderRadius="md" mb={6} />
        <Text fontSize="lg">{blog.detailDescription}</Text>
      </Box>
    </Container>
  );
};

export default BlogDetail;