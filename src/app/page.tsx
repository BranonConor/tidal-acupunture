"use client";

import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/services/Services";
import {
  Flex,
  Button,
  Box,
  useColorModeValue,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Info } from "@/components/sections/Info";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { ContactUs } from "@/components/sections/ContactUs";
import { UpdateBanner } from "@/components/UpdateBanner";

export default function Home() {
  const bannerBg = useColorModeValue("brand.gold", "brand.mint");
  const bannerContainerBg = useColorModeValue("brand.wave", "brand.mauve");
  const wavingHand = useColorModeValue("👋🏽", "👋🏻");

  return (
    <PageLayout scrollBehavior="smooth">
      <Navbar />
      <Hero
        title="Acupuncture for all life's highs and lows."
        description="TIDAL is a Southern Californian acupuncture clinic
        delivering the best care Eastern Medicine has to offer."
        ctaSection={
          <Flex my={4}>
            <Button as={Link} href="/services" variant="primary" mr={2}>
              What we do
            </Button>
            <Button as={Link} href="/team" variant="secondary">
              Who We Are
            </Button>
          </Flex>
        }
      />
      <UpdateBanner
        width="100%"
        bg={bannerContainerBg}
        px={[4, 4, 8]}
        position="relative"
        display="flex"
        justifyContent="center"
      >
        <Box id="fall-2025-update" position="absolute" top="-64px" />
        <Box
          bg={bannerBg}
          px={4}
          py={4}
          borderRadius={16}
          color="brand.royalMoss"
          maxWidth="1440px"
        >
          <Heading variant="h2" as="h2">
            {wavingHand} Fall 2025 Update!
          </Heading>
          <Divider borderColor="brand.text" mb={4} />
          <Flex gap={4} flexDirection="column">
            <Text>"Dear Patients,</Text>
            <Text>
              Tidal Acupuncture in San Diego is officially closing as we
              transition to a new location in Santa Barbara. At this time, we
              are no longer accepting new patients at our San Diego clinic. We
              are so grateful for the opportunity to have supported your health
              and wellness over the past two years and we thank you for being a
              part of our journey.
            </Text>
            <Text>
              Stay tuned for future comms on our Santa Barbara reopening! 🏝️☀️"
            </Text>
            <Text>- Dr. Rachel Eusebio, Founder</Text>
          </Flex>
        </Box>
      </UpdateBanner>
      <WhoWeAre />
      <OurTeam />
      <Services title="Our Services" />
      <Info />
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
