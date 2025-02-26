import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Banner = ({ imageUrl, title }) => {
  return (
    <Box position="relative" height="218px" overflow="hidden">
      <Box
        height="100%"
        backgroundImage={`url(${imageUrl})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        transform="translate3d(0, 0, 0)"
      ></Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex={1}
      ></Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        zIndex={2}
      >
        <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} mb={2}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default Banner;