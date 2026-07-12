"use client";

import {
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Button,
  Box,
  Image,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ScrollReveal } from "../../ScrollReveal";
import { getServices } from "./getServices";

export interface ServicesProps {
  title: string;
}

export const Services: React.FC<ServicesProps> = ({ title }) => {
  const bg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const iconMode = useColorModeValue("dark", "dark");
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const borderColor = "rgba(8, 40, 48, 0.15)";

  const services = getServices(iconMode);

  return (
    <Flex
      position="relative"
      boxSizing="border-box"
      color={textColor}
      alignItems="flex-start"
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      px={[6, 8, 12]}
    >
      {/* Background wave */}
      <Box
        position="absolute"
        zIndex={0}
        top={["10%"]}
        left={["-30%", "-20%", "-10%"]}
        opacity={0.06}
        animation="waveFloat 9s ease-in-out infinite"
        transform="rotate(15deg)"
      >
        <Image src={bgImage} minWidth={["500px", "700px"]} />
      </Box>

      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="flex-start"
        maxWidth="1200px"
        width="100%"
        py={[20, 28, 36]}
      >
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "2fr 3fr"]}
          gridTemplateAreas={[
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"media title" "media desc"`,
          ]}
          gridTemplateRows={["auto", "auto", "auto", "auto 1fr"]}
          gridColumnGap={[6, 8, 12, 16]}
          gridRowGap={[6, 8, 10, 5]}
          alignItems="start"
          width="100%"
        >
          <ScrollReveal gridArea="media" direction="right" delay={0.15} mb={[4, 0]}>
            <Box position="relative">
              <Image
                src="/media/clinic/herbs.png"
                width="100%"
                borderRadius={24}
                boxShadow="2xl"
                draggable={false}
              />
              <Box
                position="absolute"
                top={-4}
                left={-4}
                width="64px"
                height="64px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor={accentColor}
                borderTopLeftRadius={24}
                opacity={0.8}
              />
              <Box
                position="absolute"
                bottom={-4}
                right={-4}
                width="64px"
                height="64px"
                borderBottom="3px solid"
                borderRight="3px solid"
                borderColor={accentColor}
                borderBottomRightRadius={24}
                opacity={0.8}
              />
            </Box>
          </ScrollReveal>

          <ScrollReveal gridArea="title">
            <Text
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="xs"
              fontWeight="bold"
              color={textColor}
              mb={4}
            >
              What We Offer
            </Text>
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              lineHeight={1.15}
              mb={[0, 0, 0, 6]}
            >
              {title}
            </Heading>
          </ScrollReveal>

          <ScrollReveal gridArea="desc" delay={0.1}>
            <Text
              as="p"
              fontSize={["md", "lg"]}
              lineHeight={1.8}
              color={textColor}
              maxWidth="700px"
              mb={8}
            >
              We treat a ton of different conditions, including but not limited
              to: chronic pain, musculoskeletal injuries, insomnia, anxiety,
              depression, migraines, autoimmune conditions, gastrointestinal
              diseases, women's health, and dermatology
            </Text>
            <Flex
              gap={3}
              flexDirection={["column", "row"]}
              alignItems={["flex-start", "center"]}
            >
              <Button
                as={Link}
                variant="primary"
                href="/services"
                width="auto"
              >
                View services & pricing
              </Button>
            </Flex>
          </ScrollReveal>
        </Grid>

        {/* Values-style service list */}
        <Grid
          mt={[10, 12, 16]}
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gridGap={0}
          width="100%"
        >
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Box
                py={8}
                px={[0, 4, 6]}
                borderTop="1px solid"
                borderColor={borderColor}
                position="relative"
                height="100%"
                _hover={{
                  "& .service-accent": {
                    width: "40px",
                    opacity: 1,
                  },
                }}
              >
                <Box
                  className="service-accent"
                  position="absolute"
                  top={0}
                  left={[0, 4, 6]}
                  width="0px"
                  height="2px"
                  bg={accentColor}
                  transition="0.4s ease all"
                  opacity={0}
                />
                <Image src={service.icon} width="32px" mb={4} />
                <Heading as="h3" fontSize={["lg", "xl"]} color={textColor} mb={3}>
                  {service.title}
                </Heading>
                <Text color={textColor} fontSize="md" lineHeight={1.7}>
                  {service.description}
                </Text>
              </Box>
            </ScrollReveal>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
