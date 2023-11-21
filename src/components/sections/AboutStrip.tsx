import { Box, Flex, Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import { Card } from "../Card";

export const AboutStrip = () => {
  return (
    <Flex
      justifyContent="center"
      px={4}
      py={16}
      bg="brand.wave"
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        top: "-8px",
        background: "brand.wave",
        height: "100%",
        width: "100%",
        zIndex: "0",
      }}
    >
      <Box zIndex="0">
        <Heading
          as="h2"
          size="3xl"
          textAlign="center"
          mb={8}
          color="brand.royalMoss"
        >
          Who We Are
        </Heading>
        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          gridGap={4}
        >
          <Card
            title="Passionate Clinicians"
            description="Nothing invigorates us more than helping our patients lead their healthiest, happiest lifestyles."
          />
          <Card
            title="Experts of our Craft"
            description="We're doctorate-level acupuncturists, board-certified in all 50 states, with rich experience across all kinds of clinics, hospitals, and more."
          />
          <Card
            title="Human-centered"
            description="We're people-persons - we value each and every patient at our practice and love meeting folks from all different walks of life."
          />
        </Grid>
      </Box>
    </Flex>
  );
};
