import React from "react";
import { Box, Image, Text, Heading, VStack, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from '../assets/avatar/girl.jpg';
import boy from '../assets/avatar/boy.avif';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from "@emotion/react";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    product: "Almonds",
    img: girl,
    testimonial: "The almonds from MyStore are fresh and crunchy. I've never tasted such high-quality dry fruits!"
  },
  {
    id: 2,
    name: "Bob Smith",
    product: "Cashews",
    img: boy,
    testimonial: "I absolutely love the cashews from MyStore. They offer the perfect blend of taste and nutrition."
  },
  {
    id: 3,
    name: "Clara Williams",
    product: "Pistachios",
    img: girl,
    testimonial: "MyStore's pistachios are top-notch. I always recommend them to my friends and family."
  },
  {
    id: 4,
    name: "David Lee",
    product: "Walnuts",
    img: boy,
    testimonial: "Excellent quality walnuts and fantastic customer service. MyStore never disappoints."
  },
  {
    id: 5,
    name: "Eva Brown",
    product: "Mixed Dry Fruits",
    img: girl,
    testimonial: "The mixed dry fruits pack from MyStore is my go-to snack—fresh, flavorful, and perfect for every occasion."
  },
  {
    id: 6,
    name: "Frank Harris",
    product: "Pistachios",
    img: boy,
    testimonial: "Every time I order from MyStore, I'm impressed by their quality. Their pistachios are simply the best!"
  },
  {
    id: 7,
    name: "Grace Kim",
    product: "Almonds",
    img: girl,
    testimonial: "MyStore has the best almonds I've ever had. They add the perfect crunch to my morning smoothie."
  },
  {
    id: 8,
    name: "Henry Clark",
    product: "Cashews",
    img: boy,
    testimonial: "The cashews from MyStore are always fresh and delicious. A real treat for any snack time!"
  },
  {
    id: 9,
    name: "Irene Scott",
    product: "Walnuts",
    img: girl,
    testimonial: "I enjoy using MyStore's walnuts in my baking—the quality is truly unmatched."
  },
  {
    id: 10,
    name: "Jack Turner",
    product: "Mixed Nuts",
    img: boy,
    testimonial: "The mixed nuts pack is a great snack option. MyStore always delivers the best quality!"
  }
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
    { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } }
  ]
};

const Testimonial = () => {
  const sliderRef = React.useRef(null);
  const theme = useTheme();

  return (
    <VStack
      overflowX="hidden"
      bg="bg"
      spacing={8}
      px={{ base: 4, md: 8, lg: 24 }}
      py={10}
      align="center"
    >
      <Heading fontSize="4xl" textAlign="center">
        What Our Customers Say at{" "}
        <Text as="span" color="text">
          MyStore
        </Text>
      </Heading>
      <Box w="full" maxW="1200px" position="relative">
        <IconButton
          icon={<FaArrowLeft />}
          position="absolute"
          left="-50px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="10"
          display={{ base: "none", md: "block" }}
          color="bg"
          bg="text"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous"
        />
        <Slider ref={sliderRef} {...sliderSettings}>
          {testimonialsData.map((testimonial) => (
            <Box
              key={testimonial.id}
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              bg="white"
              mx={1}
              textAlign="center"
            >
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                boxSize="100px"
                borderRadius="full"
                mx="auto"
                border={`3px solid ${theme.colors.text}`}
                boxShadow={`3px 3px 30px ${theme.colors.text}`}
              />
              <Text fontSize="lg" fontWeight="bold" mt={3}>
                {testimonial.name}
              </Text>
              <Text fontSize="sm" color="gray.600">
                <strong>Favorite Product:</strong> {testimonial.product}
              </Text>
              <Text fontStyle="italic" mt={3} color="gray.700">
                "{testimonial.testimonial}"
              </Text>
            </Box>
          ))}
        </Slider>
        <IconButton
          icon={<FaArrowRight />}
          position="absolute"
          right="-50px"
          top="50%"
          transform="translateY(-50%)"
          color="bg"
          bg="text"
          display={{ base: "none", md: "block" }}
          zIndex="10"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next"
        />
      </Box>
    </VStack>
  );
};

export default Testimonial;
