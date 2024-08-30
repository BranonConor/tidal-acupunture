"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  Divider,
  useColorModeValue,
  Grid,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { TeamCard } from "@/components/TeamCard";
import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const color = useColorModeValue("brand.royalMoss", "white");
  const teamBg = useColorModeValue("brand.wave", "brand.royalMoss");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="About Us"
        description="We're more than just a wellness destination. We're passionate and skilled healers."
      />
      <Box padding={[4, 8]} color={color} bg={teamBg} pb={20}>
        <Heading as="h2" size="xl">
          Meet Our Team
        </Heading>
        <Divider borderColor={color} mb={12} />
        <Heading as="h3">A note to our patients,</Heading>
        <Text mb={4}>
          We are passionate healers committed to making a difference in
          healthcare. We blend the time-honored wisdom of Eastern Medicine with
          modern research to provide our patients with hands-on, exceptional
          care. We are dedicated to tailoring each treatment to the unique needs
          of every individual who walks through our doors. We understand that
          healing is not linear, and we want to be your trusted partners through
          the ups and downs of your wellness journey.
        </Text>
        <Text>- The Tidal Team</Text>
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
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
