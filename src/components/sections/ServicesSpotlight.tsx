import {
  Image,
  Box,
  Text,
  useColorModeValue,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { SpotlightCard } from "../SpotlightCard";

export const ServicesSpotlight = () => {
  const bg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);
  const spotlightServices = [
    {
      title: "Acupuncture",
      description: "Acupuncture is awesome! Read more about it.",
      src: "/media/acupuncture.png",
    },
    {
      title: "Microneedling",
      description: "Microneedling is awesome! Read more about it.",
      src: "/media/microneedling.png",
    },
    {
      title: "Cosmetic Acupuncture",
      description: "Cosmetic Acupuncture is awesome! Read more about it.",
      src: "/media/cosmetic-acupuncture.png",
    },
    {
      title: "Fire Cupping",
      description: "Fire Cupping is awesome! Read more about it.",
      src: "/media/fire-cupping.png",
    },
  ];
  return (
    <Box
      bg={bg}
      px={[4, 8]}
      pt={20}
      pb={24}
      mb={8}
      borderRadius={radius}
      color={textColor}
    >
      <Heading as="h2" size="3xl">
        Services Spotlight ✨
      </Heading>
      <Grid my={8} gridGap={8} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
        {spotlightServices.map((service) => (
          <SpotlightCard
            title={service.title}
            description={service.description}
            image={service.src}
          />
        ))}
      </Grid>
    </Box>
  );
};
