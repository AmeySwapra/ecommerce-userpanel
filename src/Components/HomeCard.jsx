import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import slide1 from '../assets/images/dryfruits.jpg';
import slide2 from '../assets/images/dry.jpg'
import slide3 from '../assets/images/dryfruits.jpg';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeCard() {
  const [slider, setSlider] = useState(null);
  const [animationKey, setAnimationKey] = useState(Math.random());

  const intervalRef = useRef(null);

  const cards = [
    {
      title: "Premium Quality Dry Fruits & Nuts",
      subtitle: "Healthy & Delicious Snacks for You",
      text: "MyStore - Your One-Stop Destination for Dry Fruits",
      image: slide1,
    },
    {
      title: "Boost Your Health with Our Nuts",
      subtitle: "Rich in Nutrients & Perfect for Every Occasion",
      text: "+91-9876543210",
      image: slide3,
    },
    {
      title: "Get the Best Dry Fruits at MyStore",
      subtitle: "Fresh, Tasty, and 100% Natural",
      text: "MyStore - Your Trusted Dry Fruits Partner",
      image: slide2,
    },
  ];
  

  const letterAnimation = {
    hidden: { x: 500, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 50 },
    }),
  };

  const buttonAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 50 },
    },
  };

  const startAutoSlide = () => {
    if (slider) {
      intervalRef.current = setInterval(() => {
        slider.slickNext();
        setAnimationKey(Math.random());
      }, 5000);
    }
  };

  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  React.useEffect(() => {
    startAutoSlide();
    return clearAutoSlide;
  }, [slider]);

  return (
    <Box
      position="relative"
      height={{ base: "400px", md: "600px" }}
      width="full"
      overflow="hidden"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "10px", md: "40px" }}
        top="50%"
        display={{base: 'none', md: 'block'}}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        display={{base: 'none', md: 'block'}}
        right={{ base: "10px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>

      <Slider
        {...settings}
        ref={(c) => setSlider(c)}
        beforeChange={(current, next) => {
          setAnimationKey(Math.random());
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ base: "400px", md: "600px" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.2)"
            />

            <Container size="container.xl" height="100%" position="relative">
              <Stack
                spacing={6}
                w={{ base: "90%", md: "80%", lg: "200%" }}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="center"
              >
                <Heading fontSize={{ base: "2xl", md: "4xl" }}>
                  {card.title.split("").map((letter, i) => (
                    <motion.span
                      key={`${index}-title-${i}`}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Heading>

                <Text fontSize={{ base: "md", md: "4xl" }} fontWeight="700">
                  {card.subtitle.split("").map((letter, i) => (
                    <motion.span
                      key={`${index}-subtitle-${i}`}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Text>

                <Text fontSize={{ base: "sm", md: "lg" }} color={"yellow.400"}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}