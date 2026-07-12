"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../../ScrollReveal";
import { Eyebrow } from "../../editorial/Eyebrow";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonialData";

const MotionFlex = motion(Flex);

export const Testimonials: React.FC = () => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const arrowBg = useColorModeValue(
    "rgba(8, 40, 48, 0.06)",
    "rgba(255, 245, 226, 0.06)"
  );
  const arrowBorder = useColorModeValue(
    "rgba(8, 40, 48, 0.2)",
    "rgba(255, 245, 226, 0.2)"
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const featured = testimonials.slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      bg={bg}
      px={[6, 8, 12]}
      py={[16, 20, 24]}
      position="relative"
    >
      <Box maxWidth="1200px" width="100%">
        <ScrollReveal>
          <Eyebrow color={accentColor}>Testimonials</Eyebrow>
          <Heading
            as="h2"
            fontSize={["2xl", "3xl", "4xl"]}
            color={textColor}
            lineHeight={1.15}
            mb={3}
          >
            The Tidal Experience
          </Heading>
          <Text
            color={subtleText}
            fontSize={["md", "lg"]}
            lineHeight={1.8}
            maxWidth="600px"
            mb={6}
          >
            Real stories from real patients. Hear how TIDAL has helped people
            find relief, balance, and vitality.
          </Text>
          <Button
            as={Link}
            href="/testimonials"
            variant="primary"
            size="sm"
            mb={[8, 10, 12]}
          >
            See all testimonials
          </Button>
        </ScrollReveal>

        {/* Carousel */}
        <Flex
          ref={scrollRef}
          overflowX="auto"
          gap={[4, 5, 6]}
          pt={2}
          pb={6}
          scrollSnapType="x mandatory"
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
          role="region"
          aria-label="Patient testimonials carousel"
        >
          {featured.map((testimonial, i) => (
            <MotionFlex
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              minWidth={["280px", "320px", "360px"]}
              maxWidth={["280px", "320px", "360px"]}
              scrollSnapAlign="start"
              flexShrink={0}
            >
              <TestimonialCard testimonial={testimonial} />
            </MotionFlex>
          ))}
        </Flex>

        {/* Navigation arrows */}
        <Flex gap={2} mt={2}>
          <Box
            as="button"
            aria-label="Scroll testimonials left"
            onClick={() => scroll("left")}
            width="44px"
            height="44px"
            borderRadius="full"
            border="2px solid"
            borderColor={arrowBorder}
            bg={arrowBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="0.2s ease all"
            fontWeight="bold"
            fontSize="lg"
            _hover={{
              borderColor: accentColor,
              color: accentColor,
              bg: useColorModeValue(
                "rgba(240, 191, 64, 0.08)",
                "rgba(174, 234, 187, 0.08)"
              ),
            }}
            color={textColor}
          >
            ←
          </Box>
          <Box
            as="button"
            aria-label="Scroll testimonials right"
            onClick={() => scroll("right")}
            width="44px"
            height="44px"
            borderRadius="full"
            border="2px solid"
            borderColor={arrowBorder}
            bg={arrowBg}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="0.2s ease all"
            fontWeight="bold"
            fontSize="lg"
            _hover={{
              borderColor: accentColor,
              color: accentColor,
              bg: useColorModeValue(
                "rgba(240, 191, 64, 0.08)",
                "rgba(174, 234, 187, 0.08)"
              ),
            }}
            color={textColor}
          >
            →
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
