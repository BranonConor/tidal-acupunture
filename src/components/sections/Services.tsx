import {
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Card } from "../Card";

export interface ServicesProps {
  title: string;
}

export const Services: React.FC<ServicesProps> = ({ title }) => {
  const bg = useColorModeValue("brand.sand", "brand.mauve");

  return (
    <Flex
      bg={bg}
      position="relative"
      px={[4, 8]}
      py={[16, 24]}
      boxSizing="border-box"
      color="brand.royalMoss"
      alignItems={["flex-start"]}
      maxWidth="100%"
      overflow="hidden"
      borderRadius={16}
      mb={8}
    >
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems={["flex-start"]}
        width="100%"
      >
        <Heading as="h2" size="3xl" width="100%">
          {title}
        </Heading>
        <Divider borderColor="brand.royalMoss" mb={8} mt={4} />
        <Text as="p">
          We treat a ton of different conditions, including but not limited to:
          chronic pain, musculoskeletal injuries, insomnia, anxiety, depression,
          migraines, autoimmune conditions, gastrointestinal diseases, women’s
          health, and dermatology
        </Text>
        <Flex mt={8}>
          <Button as={Link} variant="primary" href="/services" mr={2}>
            All Services
          </Button>
          <Button as={Link} variant="secondary" href="/services">
            Learn More
          </Button>
        </Flex>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          width={["100%"]}
          gridGap={[4, 4, 8]}
          pt={8}
        >
          <Card
            icon="/icons/needles-dark.svg"
            title="Acupuncture"
            description="Expert needling technique with combined Chinese Medicine theory and Western Medicine knowledge"
          />
          <Card
            icon="/icons/cosmetic-dark.svg"
            title="Cosmetic Acupuncture"
            description="Skincare with a zen twist, cosmetic acupuncture is a natural approach to improve skin health and appearance"
          />
          <Card
            icon="/icons/cupping-dark.svg"
            title="Cupping"
            description="Traditional fire cupping as well as suction cupping"
          />
          <Card
            icon="/icons/fire-dark.svg"
            title="Herbal Medicine"
            description="Tailored herbal tinctures and remedies for a myriad of conditions and complaints"
          />
          <Card
            icon="/icons/pen-dark.svg"
            title="Microneedling"
            description="State-of-the-art microneedling pen treatments for cosmetic conditions"
          />
        </Grid>
      </Flex>
    </Flex>
  );
};
