import {
  Box,
  Flex,
  Grid,
  Heading,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { Card } from "../Card";

export const WhoWeAre = () => {
  const bg = useColorModeValue("brand.wave", "brand.mauve");
  return (
    <Flex
      justifyContent="center"
      px={[4, 8]}
      py={[16, 24]}
      boxSizing="border-box"
      bg={bg}
      position="relative"
      _before={{
        content: "''",
        position: "absolute",
        top: "-8px",
        background: bg,
        height: "100%",
        width: "100%",
        zIndex: "0",
      }}
      overflow="hidden"
    >
      <Box zIndex="0">
        <Heading as="h2" size="3xl" color="brand.royalMoss">
          Who We Are
        </Heading>
        <Divider borderColor="brand.royalMoss" mb={8} />
        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          gridGap={4}
        >
          <Card
            icon="icons/heart-dark.svg"
            title="Passionate Clinicians"
            description="Nothing invigorates us more than helping our patients lead their healthiest, happiest lifestyles."
          />
          <Card
            icon="icons/briefcase-dark.svg"
            title="Experts of our Craft"
            description="We're doctorate-level acupuncturists, board-certified in all 50 states, with rich experience across all kinds of clinics, hospitals, and more."
          />
          <Card
            icon="icons/users-dark.svg"
            title="Human-centered"
            description="We're people-persons - we value each and every patient at our practice and love meeting folks from all different walks of life."
          />
        </Grid>
      </Box>
    </Flex>
  );
};
