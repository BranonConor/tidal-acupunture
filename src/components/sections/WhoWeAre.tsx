import {
  Box,
  Flex,
  Grid,
  Heading,
  useColorModeValue,
  Divider,
  Image,
  Text,
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
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
          gridGap={[4, 8, 12]}
        >
          <Image src="/media/palms.png" boxShadow="lg" width="100%" mb="4" />

          <Flex flexDirection="column" py={[10, 10, 8, 8]}>
            <Heading as="h2" size="3xl" color="brand.royalMoss">
              We're more than a wellness destination.
            </Heading>
            <Divider borderColor="brand.royalMoss" mb={8} mt={4} />
            <Text as="p" color="brand.royalMoss">
              TIDAL Acupuncture is a purpose-driven cornerstone within the
              community, committed to fostering a tidal wave of health and
              vitality. Our purpose extends beyond the treatment room, reaching
              into the heart of the community, where we aim to be a catalyst for
              positive change.
            </Text>
            <br />
            <Text as="p" color="brand.royalMoss">
              We're dedicated to providing accessible and transformative
              healthcare to address your immediate concerns AND cultivate a
              culture of
              <strong>
                <em> holistic living. </em>
              </strong>
              Our purpose is to create a powerful shift towards a healthier,
              more vibrant community, where the principles of natural healing
              are embraced, and the journey to well-being is celebrated as a
              shared endeavor.
            </Text>
          </Flex>
        </Grid>
        <Grid
          gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr"]}
          gridGap={4}
          mt={8}
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
