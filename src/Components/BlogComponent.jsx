import React, { useState } from 'react';
import { Box, Image, Text, Link, SimpleGrid, HStack, Button } from '@chakra-ui/react';

const BlogComponent = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} py={10} px={{base: 4, md: 8, lg: 24}}>
        {currentBlogs.map((blog) => (
          <Box key={blog.id} borderRadius="lg" overflow="hidden" boxShadow="dark-lg" _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}>
            <Image src={blog.image} alt={blog.title} width="100%" height="200px" objectFit="cover" />
            <Box p={4}>
              <Text fontSize="xl" color={'green.500'} fontWeight="bold" mb={2}>{blog.title}</Text>
              <Text fontSize="md" color="gray.600" mb={3}>{blog.overview}</Text>
              <Link href={`/blog/${blog.title}`} color="green.500" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>Read More</Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <HStack spacing="4" justifyContent="center" m="8">
        <Button isDisabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button isDisabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </Button>
      </HStack>
    </>
  );
};

export default BlogComponent;
