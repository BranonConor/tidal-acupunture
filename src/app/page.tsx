"use client";

import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/services/Services";
import { Flex, Button } from "@chakra-ui/react";
import { Info } from "@/components/sections/Info";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import { ContactUs } from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <PageLayout>
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
      <WhoWeAre />
      <OurTeam />
      <Services title="Our Services" />
      <Info />
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
