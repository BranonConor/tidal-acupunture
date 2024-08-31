"use client";

import { Navbar } from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Patient Resources"
        description="More information to help our patients stay as informed and connected as possible."
      />
      <Box
        py={16}
        px={[4, 8]}
        maxWidth="1440px"
        position="relative"
        overflowX="hidden"
        width="100%"
      >
        <ContactUs />
        <Footer />
      </Box>
    </PageLayout>
  );
}
