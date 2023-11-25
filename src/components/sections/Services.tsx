import {
  Flex,
  useColorModeValue,
  Box,
  Image,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { Card } from "../Card";
export const Services = () => {
  const bg = useColorModeValue("brand.sand", "brand.mauve");
  return (
    <Flex
      bg={bg}
      position="relative"
      px={[4, 8]}
      pt={32}
      pb={24}
      boxSizing="border-box"
      color="brand.royalMoss"
      alignItems={["flex-start", "flex-end"]}
      maxWidth="100%"
      overflow="hidden"
    >
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems={["flex-start", "flex-end"]}
        width="100%"
      >
        <Heading as="h2" size="3xl" width="100%" textAlign="end">
          Our Services
        </Heading>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          width={["100%", "100%", "66%"]}
        >
          <Card
            icon="icons/needles-dark.svg"
            title="Acupuncture"
            description="Expert needling technique with combined Chinese Medicine theory and Western Medicine knowledge"
          />
          <Card
            icon="icons/cupping-dark.svg"
            title="Cupping"
            description="Traditional fire cupping as well as suction cupping"
          />
          <Card
            icon="icons/fire-dark.svg"
            title="Herbal Remedies"
            description="Tailored herbal tinctures and remedies for a myriad of conditions and complaints"
          />
          <Card
            icon="icons/pen-dark.svg"
            title="Microneedling"
            description="State-of-the-art microneedling pen treatments for cosmetic conditions"
          />
        </Grid>
      </Flex>
      <Box
        transform="rotate(-215deg) scale(1)"
        position="absolute"
        zIndex={0}
        top={[-8, -8, -16, -24]}
        left={["-150px", "-150px", "-500px", "-300px"]}
        width={["100%", "100%", "auto"]}
      >
        <Image src="waves-moss.svg" minWidth="100%" />
      </Box>
    </Flex>
  );
};
