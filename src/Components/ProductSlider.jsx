import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Card,
  CardBody,
  Center,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/products/pic1.jpg";
import pic2 from "../assets/products/pic2.jpg";
import pic3 from "../assets/products/pic3.jpg";
import pic4 from "../assets/products/pic4.jpg";
import pic5 from "../assets/products/pic5.jpg";
import pic6 from "../assets/products/pic6.jpg";
import pic7 from "../assets/products/pic7.jpg";
import pic8 from "../assets/products/pic8.jpg";
import pic9 from "../assets/products/pic9.jpg";
import pic10 from "../assets/products/pic10.jpg";
import pic11 from "../assets/products/pic11.jpg";
import pic12 from "../assets/products/pic12.jpg";
import pic13 from "../assets/products/pic13.jpg";
import pic14 from "../assets/products/pic14.jpg";
import pic15 from "../assets/products/pic15.jpg";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Almonds", price: 499, category: "Nuts", image: pic1 },
  { id: 2, name: "Cashews", price: 599, category: "Nuts", image: pic2 },
  { id: 3, name: "Walnuts", price: 699, category: "Nuts", image: pic3 },
  { id: 4, name: "Pistachios", price: 799, category: "Nuts", image: pic4 },
  { id: 5, name: "Raisins", price: 399, category: "Dried Fruits", image: pic5 },
  { id: 6, name: "Dates", price: 499, category: "Dried Fruits", image: pic6 },
  { id: 7, name: "Figs", price: 599, category: "Dried Fruits", image: pic7 },
  {
    id: 8,
    name: "Apricots",
    price: 699,
    category: "Dried Fruits",
    image: pic8,
  },
  { id: 9, name: "Hazelnuts", price: 899, category: "Nuts", image: pic9 },
  { id: 10, name: "Pine Nuts", price: 999, category: "Nuts", image: pic10 },
  { id: 11, name: "Brazil Nuts", price: 799, category: "Nuts", image: pic11 },
  {
    id: 12,
    name: "Macadamia Nuts",
    price: 1299,
    category: "Nuts",
    image: pic12,
  },
  { id: 13, name: "Pecans", price: 1099, category: "Nuts", image: pic13 },
  {
    id: 14,
    name: "Cranberries",
    price: 499,
    category: "Dried Fruits",
    image: pic14,
  },
  {
    id: 15,
    name: "Prunes",
    price: 599,
    category: "Dried Fruits",
    image: pic15,
  },
];

const ProductSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box py={10} bg="white">
      <Container maxW="6xl">
        <Heading textAlign="center" mb={6} color="text">
          Our Products
        </Heading>
        <Slider {...settings}>
          {products.map((product) => (
            <Box key={product.id} px={2}>
              <Card boxShadow="lg" borderRadius="lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  borderTopRadius="lg"
                  objectFit="cover"
                  height="200px"
                  w="100%"
                />
                <CardBody textAlign="center">
                  <VStack spacing={2}>
                    <Text fontSize="xl" fontWeight="bold">
                      {product.name}
                    </Text>
                    <Text fontSize="md" color="gray.500">
                      {product.category}
                    </Text>
                    <Text fontSize="lg" color="text">
                      ₹{product.price}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>

      <Center mt={6}>
        <Link to="/products">
          <Button
            bg={"green.500"}
            size="lg"
            _hover={{ bg: "hover" }}
            color="white"
            mt={2}
          >
            View All Products
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default ProductSlider;
