import { Box, useColorModeValue, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { SpotlightCard } from "../../SpotlightCard";

interface ServicesSpotlightProps {
  title?: string;
  hide?:
    | "Acupuncture"
    | "Microneedling"
    | "Cosmetic Acupuncture"
    | "Fire Cupping";
}

export const ServicesSpotlight: React.FC<ServicesSpotlightProps> = ({
  title = "Services Spotlight ✨",
  hide,
}) => {
  const bg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);
  const mode = useColorModeValue("light", "dark");
  const spotlightServices = [
    {
      title: "Acupuncture",
      description: "Read more about acupuncture 👉",
      src: `/media/acupuncture-${mode}.svg`,
      href: "/services/acupuncture",
    },
    {
      title: "Microneedling",
      description: "Read more about microneedling 👉",
      src: `/media/microneedling-${mode}.svg`,
      href: "/services/microneedling",
    },
    {
      title: "Cosmetic Acupuncture",
      description: "Read more about cosmetic acupuncture 👉",
      src: `/media/cosmetic-${mode}.svg`,
      href: "/services/cosmetic-acupuncture",
    },
    {
      title: "Fire Cupping",
      description: "Read more about fire cupping 👉",
      src: `/media/fire-cupping-${mode}.svg`,
      href: "/services/fire-cupping",
    },
  ];
  return (
    <Box
      bg={bg}
      px={[4, 8]}
      pt={20}
      pb={24}
      borderRadius={radius}
      color={textColor}
    >
      <Heading as="h2" size="3xl">
        {title}
      </Heading>
      <Grid my={8} gridGap={8} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
        {spotlightServices.map((service) =>
          hide === service.title ? null : (
            <SpotlightCard
              title={service.title}
              description={service.description}
              image={service.src}
              href={service.href}
            />
          )
        )}
      </Grid>
    </Box>
  );
};
