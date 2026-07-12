"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { PageLayout } from "@/components/PageLayout";
import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import {
  testimonials,
  categories,
} from "@/components/sections/testimonials/testimonialData";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

const MotionBox = motion(Box);

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const filterBg = useColorModeValue(
    "rgba(8, 40, 48, 0.04)",
    "rgba(255, 245, 226, 0.04)"
  );
  const filterActiveBg = useColorModeValue("brand.gold", "brand.mint");
  const filterActiveColor = useColorModeValue(
    "brand.royalMoss",
    "brand.royalMoss"
  );
  const filterBorder = useColorModeValue(
    "rgba(8, 40, 48, 0.12)",
    "rgba(255, 245, 226, 0.12)"
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="The Tidal Experience"
        description="Real stories from real patients on their journey to wellness."
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg={bg}
        color={textColor}
        px={[6, 8, 12]}
        py={[16, 20, 24]}
      >
        <Box maxWidth="1200px" width="100%">
          <ScrollReveal>
            <Eyebrow color={accentColor}>Patient Stories</Eyebrow>
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              lineHeight={1.15}
              maxWidth="720px"
              mb={3}
            >
              Hear from our community
            </Heading>
            <Text
              color={subtleText}
              fontSize={["md", "lg"]}
              lineHeight={1.8}
              maxWidth="600px"
              mb={[8, 10]}
            >
              Every patient&apos;s experience is unique. These testimonials
              reflect the real impact of holistic care at TIDAL Acupuncture.
            </Text>
          </ScrollReveal>

          {/* Category filters */}
          <ScrollReveal>
            <Flex
              gap={2}
              flexWrap="wrap"
              mb={[8, 10, 12]}
              role="tablist"
              aria-label="Filter testimonials by category"
            >
              {categories.map((category) => (
                <Box
                  key={category}
                  as="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="600"
                  border="1px solid"
                  borderColor={
                    activeCategory === category ? "transparent" : filterBorder
                  }
                  bg={activeCategory === category ? filterActiveBg : filterBg}
                  color={
                    activeCategory === category ? filterActiveColor : textColor
                  }
                  cursor="pointer"
                  transition="0.2s ease all"
                  _hover={{
                    borderColor: accentColor,
                  }}
                >
                  {category}
                </Box>
              ))}
            </Flex>
          </ScrollReveal>

          {/* Masonry columns layout */}
          <Box
            sx={{
              columnCount: [1, 2, 3],
              columnGap: ["16px", "20px", "24px"],
            }}
          >
            {filtered.map((testimonial, i) => (
              <MotionBox
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                mb={[4, 5, 6]}
                sx={{ breakInside: "avoid" }}
              >
                <TestimonialCard testimonial={testimonial} />
              </MotionBox>
            ))}
          </Box>

          {filtered.length === 0 && (
            <Flex
              justifyContent="center"
              py={16}
              flexDirection="column"
              alignItems="center"
            >
              <Text color={subtleText} fontSize="lg">
                No testimonials in this category yet.
              </Text>
            </Flex>
          )}
        </Box>
      </Flex>
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
