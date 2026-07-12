import {
  Box,
  useColorModeValue,
  Grid,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SpotlightCard } from "../../SpotlightCard";
import { Eyebrow } from "../../editorial/Eyebrow";

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
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
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
    <Flex
      position="relative"
      boxSizing="border-box"
      color="brand.royalMoss"
      alignItems={["flex-start"]}
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      px={[6, 8, 12]}
    >
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems={["flex-start"]}
        maxWidth="1200px"
        width="100%"
        py={[16, 24]}
      >
        <Eyebrow color={textColor} accentColor={accentColor}>
          Explore
        </Eyebrow>
        <Heading as="h2" fontSize={["2xl", "3xl", "4xl"]} mb={8}>
          {title}
        </Heading>
        <Grid
          my={8}
          gridGap={8}
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          width="100%"
        >
          {spotlightServices.map((service) =>
            hide === service.title ? null : (
              <SpotlightCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.src}
                href={service.href}
              />
            )
          )}
        </Grid>
      </Flex>
    </Flex>
  );
};
