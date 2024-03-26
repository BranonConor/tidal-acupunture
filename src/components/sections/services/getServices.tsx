import { PriceItem } from "./PriceItem";
import { Box, Heading } from "@chakra-ui/react";

export const getServices = (iconMode: string) => {
  const services = [
    {
      title: "Acupuncture",
      description:
        "A comprehensive needling approach that seamlessly blends Chinese medicine theory and biomedical knowledge",
      icon: `/icons/needles-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$135 - New Patient Consult and Acupuncture Treatment" />
          <PriceItem text="$110 - Return Patient Acupuncture Treatment" />
          <PriceItem text="$150 - Return Patient Acupuncture and Cupping Therapy" />
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
          <PriceItem text="$75 - Cupping Therapy" />
        </Box>
      ),
    },
    {
      title: "Herbal Medicine",
      description:
        "Tailored herbal tinctures and remedies for a myriad of conditions and complaints",
      icon: `/icons/fire-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$125 - Herbal Consultation" />
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
    {
      title: "Gua Sha",
      description:
        "Traditional Chinese medicine technique involving a jade tool abrasion/skin massage",
      icon: `/icons/gua-sha-${iconMode}.svg`,
      priceItem: (
        <Box my={4}>
          <Heading as="h4" size="md" mb={2}>
            Pricing
          </Heading>
          <PriceItem text="$50 - Gua Sha Session" />
        </Box>
      ),
    },
  ];
  return services;
};
