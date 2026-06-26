import { PriceItem } from "./PriceItem";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const getServices = (iconMode: string) => {
  const services = [
    {
      title: "Acupuncture",
      description: (
        <>
          A comprehensive needling approach that seamlessly blends Chinese
          medicine theory and biomedical knowledge.{" "}
          <Text
            as={Link}
            href="/services/acupuncture#acupuncture-process"
            _hover={{ color: "brand.darkWave" }}
            textDecoration="underline"
          >
            Learn more about the process here!
          </Text>
        </>
      ),
      icon: `/icons/needles-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$150 - New Patient Consult and Acupuncture Treatment" />
          <PriceItem text="$130 - Return Patient Acupuncture Treatment" />
          <PriceItem text="$180 - Return Patient Acupuncture and Cupping Therapy" />
        </Box>
      ),
    },
    {
      title: "Cosmetic Acupuncture",
      description:
        "Skincare with a zen twist, cosmetic acupuncture is a natural approach to improve skin health and appearance",
      icon: `/icons/cosmetic-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$180 - New Patient Consult and Cosmetic Acupuncture" />
          <PriceItem text="$160 - Return Patient Cosmetic Acupuncture" />
        </Box>
      ),
    },
    {
      title: "Cupping",
      description:
        "Traditional fire cupping to ease pain, release muscle tension, and reduce inflammation",
      icon: `/icons/cupping-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$80 - Cupping Therapy" />
        </Box>
      ),
    },
    {
      title: "Microneedling",
      description:
        "A minimally invasive cosmetic procedure that improves skin texture, wrinkles, and scars",
      icon: `/icons/pen-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$300 - Microneedling (Face Only)" />
          <PriceItem text="$375 - Microneedling (Face, Neck, Decolletage)" />
        </Box>
      ),
    },
  ];
  return services;
};
