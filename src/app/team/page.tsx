"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue, Grid, Text, Heading } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { TeamCard } from "@/components/TeamCard";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const color = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const noteBg = useColorModeValue("transparent", "brand.mauve");
  const teamBg = useColorModeValue("brand.wave", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);

  return (
    <Box
      as="main"
      bg={bg}
      minHeight="100vh"
      maxWidth="100%"
      width="100%"
      padding="0"
      display="flex"
      justifyContent="center"
      boxSizing="border-box"
    >
      <Navbar />
      <Box
        maxWidth="1440px"
        width="100%"
        position="relative"
        overflowX="hidden"
        bg={bg}
      >
        <Hero
          title="About Us"
          description="We're more than just a wellness destination. We're passionate and skilled healers."
        />
        <Box
          padding={[4, 4, 8]}
          color={color}
          bg={teamBg}
          borderRadius={radius}
          mb={8}
        >
          <Heading mb={2} as="h2" size="xl">
            Meet Our Team
          </Heading>
          <Grid
            width="100%"
            gridGap={8}
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            py={[8, 12]}
          >
            <TeamCard
              name="Dr. Rachel Eusebio"
              role="Doctor of Acupuncture (DACM)"
              image="/media/rachel.png"
              link="/team/rachel-eusebio"
            />
            <TeamCard
              name="Dr. Hannah Anderson"
              role="Doctor of Acupuncture (DACM)"
              image="/media/hannah.png"
              link="/team/hannah-anderson"
            />
          </Grid>
        </Box>
        <Box
          padding={[4, 4, 8]}
          color={color}
          bg={noteBg}
          borderRadius={radius}
          mb={8}
        >
          <Heading mb={4}>A note to our patients,</Heading>
          <Text mb={4}>
            We are passionate healers committed to making a difference in
            healthcare. We blend the time-honored wisdom of Eastern Medicine
            with modern research to provide our patients with hands-on,
            exceptional care. We are dedicated to tailoring each treatment to
            the unique needs of every individual who walks through our doors. We
            understand that healing is not linear, and we want to be your
            trusted partners through the ups and downs of your wellness journey.
          </Text>
          <Text>- The Tidal Team</Text>
        </Box>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
