import { Box, Container, VStack, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import dryfruit from '../assets/images/dryfruits.jpg'
import qualityImage from'../assets/images/dry.jpg'

const About = () => {
  return (
    <Box bg="bg" overflowX="hidden" py={10} px={{ base: 4, md: 8, lg: 24 }}>
      <Container maxW="container.xl">
        {/* Introduction Section */}
        <VStack spacing={8} align="stretch">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} alignItems="center">
            <Box>
              <Heading fontSize="4xl" mb={3} color="black">
                About <Text as="span" color="text">Us</Text>
              </Heading>
              <Text fontSize="xl">
                Welcome to our premium collection of dry fruits and nuts. Our mission is to provide high-quality, nutrient-rich products that promote a healthier lifestyle. 
                With a commitment to excellence, we source the finest almonds, cashews, walnuts, and exotic dried fruits to satisfy your taste and nutritional needs.
              </Text>
            </Box>
            <Image
              src={dryfruit}
              alt="About Us Image"
              borderRadius="lg"
              loading="lazy"
              w={{ base: "100%", md: "80%" }}
            />
          </Grid>
        </VStack>

        {/* Quality Commitment Section */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} alignItems="center" mt={10}>
          <Image
            src={qualityImage}
            alt="Quality Commitment"
            borderRadius="lg"
            loading="lazy"
            w={{ base: "100%", md: "80%" }}
          />
          <Box>
            <Heading fontSize="4xl" mb={3} color="black">
              Our <Text as="span" color="text">Commitment</Text> to Quality
            </Heading>
            <Text fontSize="xl">
              We believe in delivering only the best. Our dry fruits and nuts undergo rigorous quality checks to ensure freshness, purity, and superior taste. 
              From ethical sourcing to careful packaging, every step of our process is designed to bring you the healthiest and tastiest products. 
              Our dedication to quality is what sets us apart in the market, making us a trusted choice for health-conscious individuals and food lovers alike.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
