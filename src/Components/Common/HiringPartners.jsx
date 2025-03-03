import React from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dryFruitsCompanies = [
  { id: 1, logo: "https://logo.clearbit.com/haldiram.com", name: "Haldiram's" },
  { id: 2, logo: "https://logo.clearbit.com/bikano.com", name: "Bikano" },
  { id: 3, logo: "https://logo.clearbit.com/delmonte.com", name: "Del Monte" },
  { id: 4, logo: "https://logo.clearbit.com/kirkland.com", name: "Kirkland" },
  { id: 5, logo: "https://logo.clearbit.com/mtrfoods.com", name: "MTR Foods" },
  { id: 6, logo: "https://logo.clearbit.com/tata.com", name: "Tata Sampann" },
  { id: 7, logo: "https://logo.clearbit.com/jabsons.com", name: "Jabsons" },
  { id: 8, logo: "https://logo.clearbit.com/nuttyguys.com", name: "Nutty Gys" },
  { id: 9, logo: "https://logo.clearbit.com/nutraj.com", name: "Nutraj" },

  {
    id: 11,
    logo: "https://logo.clearbit.com/urbanplatter.com",
    name: "Urban Platter",
  },

  { id: 13, logo: "https://logo.clearbit.com/sundrop.com", name: "Sundrop" },
  { id: 14, logo: "https://logo.clearbit.com/rostaa.com", name: "Rostaa" },
  {
    id: 15,
    logo: "https://logo.clearbit.com/wholesomenut.com",
    name: "Borges",
  },
  { id: 16, logo: "https://logo.clearbit.com/loacker.com", name: "Loacker" },
  {
    id: 17,
    logo: "https://logo.clearbit.com/almonds.com",
    name: "California Almonds",
  },
  {
    id: 20,
    logo: "https://logo.clearbit.com/almondbreeze.com",
    name: "Go Organic",
  },
  {
    id: 21,
    logo: "https://logo.clearbit.com/healthytruth.com",
    name: "Healthy Truth",
  },
  { id: 22, logo: "https://logo.clearbit.com/happilo.com", name: "Happilo" },
  {
    id: 23,
    logo: "https://logo.clearbit.com/dailyharvest.com",
    name: "Daily Harvest",
  },
  { id: 24, logo: "https://logo.clearbit.com/zenbasil.com", name: "Zen Basil" },
  {
    id: 25,
    logo: "https://logo.clearbit.com/santebarley.com",
    name: "Sante Barley",
  },
  {
    id: 26,
    logo: "data:image/jpeg;base64,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",
    name: "Ganesha Snacks",
  },

  {
    id: 28,
    logo: "https://logo.clearbit.com/thebetterindia.com",
    name: "The Better India",
  },

  { id: 30, logo: "https://logo.clearbit.com/grofers.com", name: "Grofers" },
];

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  draggable: true,
  variableWidth: true,
};

const HiringPartners = () => {
  return (
    <Box bg="bg" overflow="hidden" py={10}>
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" fontSize="4xl" color="black" mb={6}>
          Our{" "}
          <Text as="span" color="text">
            Partners
          </Text>
        </Heading>

        {/* Row 1 */}
        <Slider {...settings}>
          {dryFruitsCompanies.map((partner) => (
            <Box
              key={partner.id}
              p={4}
              bg="white"
              borderRadius="lg"
              m={5}
              width="350px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 20px #881fc5",
              }}
            >
              <Image src={partner.logo} alt={partner.name} maxH="70px" />
            </Box>
          ))}
        </Slider>

        {/* Row 2 (reversed order for variation) */}
        <Slider {...settings} rtl={true}>
          {dryFruitsCompanies.reverse().map((partner) => (
            <Box
              key={partner.id}
              p={4}
              bg="white"
              borderRadius="lg"
              m={5}
              width="350px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 20px #881fc5",
              }}
            >
              <Image src={partner.logo} alt={partner.name} maxH="70px" />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default HiringPartners;
