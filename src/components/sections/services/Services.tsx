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
import { Card } from "../../Card";
import { ServicesGrid } from "./ServicesGrid";

export interface ServicesProps {
  title: string;
}

export const Services: React.FC<ServicesProps> = ({ title }) => {
  const bg = useColorModeValue("brand.sand", "brand.mauve");
  const servicesTextColor = useColorModeValue(
    "brand.royalMoss",
    "brand.royalMoss"
  );

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
        <ServicesGrid textColor={servicesTextColor} />
      </Flex>
    </Flex>
  );
};
