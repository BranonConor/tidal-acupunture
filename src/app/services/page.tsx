"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  Divider,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { getServices } from "@/components/sections/services/getServices";
import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.white");
  const iconMode = useColorModeValue("dark", "light");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Our Services"
        description="We offer a wide variety of services, all of which are tailored just for YOU."
      />
      <ServicesSpotlight />

      <Box
        py={16}
        px={[4, 8]}
        maxWidth="1440px"
        position="relative"
        overflowX="hidden"
        width="100%"
      >
        <Heading as="h2" size="2xl">
          All Services & Pricing
        </Heading>
        <Divider borderColor={textColor} mb={2} />
        <ServicesGrid
          textColor={textColor}
          services={getServices(iconMode)}
          showPrices={true}
        />

        <Heading as="h3" size="md" mb={4} mt={8}>
          ***Cancellation notice
        </Heading>
        <Text as="p">
          We kindly ask that you provide at least a 24-hour notice if you need
          to cancel or reschedule your appointment with us. In the event of a
          late cancellation or missed appointment, the full charge of the
          scheduled service will be applied. Thank you for your understanding
          and cooperation. Should you have any questions or need to make changes
          to your appointment, please don't hesitate to contact us.
        </Text>
      </Box>
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
