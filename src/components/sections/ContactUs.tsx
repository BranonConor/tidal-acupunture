"use client";

import {
  Grid,
  Heading,
  useColorModeValue,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { ContactForm } from "../ContactForm";
import { ScrollReveal } from "../ScrollReveal";
import Link from "next/link";

interface ContactUsProps {
  overrideDarkMode?: boolean;
}

export const ContactUs: React.FC<ContactUsProps> = ({ overrideDarkMode }) => {
  const bg = "brand.royalMoss";
  const text = useColorModeValue("brand.sand", "brand.sand");
  const subtleText = useColorModeValue("brand.wave", "brand.wave");
  const textHover = useColorModeValue("brand.gold", "brand.mint");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");

  return (
    <Flex
      position="relative"
      boxSizing="border-box"
      color={text}
      alignItems="flex-start"
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      id="contact-us"
      px={[6, 8, 12]}
    >
      <Flex
        py={[20, 28, 36]}
        zIndex={1}
        flexDirection="column"
        alignItems="flex-start"
        maxWidth="1200px"
        width="100%"
      >
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gridTemplateRows={["auto", "auto", "auto 1fr"]}
          gridTemplateAreas={[
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"media title" "media desc"`,
          ]}
          gridColumnGap={[6, 8, 12, 16]}
          gridRowGap={[6, 8, 5]}
          alignItems="start"
          width="100%"
        >
          <ScrollReveal gridArea="media" delay={0.1} mb={[4, 0]}>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal gridArea="title" delay={0.15}>
            <Flex flexDirection="column" pl={[0, 0, 8]}>
              <Text
                textTransform="uppercase"
                letterSpacing="0.2em"
                fontSize="xs"
                fontWeight="bold"
                color={accentColor}
                mb={4}
              >
                Get in Touch
              </Text>
              <Heading
                as="h2"
                fontSize={["2xl", "3xl", "4xl"]}
                lineHeight={1.15}
                mb={4}
              >
                Contact Us
              </Heading>
              <Heading as="h3" fontSize="xl">
                We can't wait to hear from you.
              </Heading>
            </Flex>
          </ScrollReveal>

          <ScrollReveal gridArea="desc" delay={0.2}>
            <Flex flexDirection="column" pl={[0, 0, 8]} pt={[0, 0, 8]}>
              <Text
                as="p"
                color={subtleText}
                fontSize="lg"
                lineHeight={1.8}
              >
                Here's some quick links just in case the answer to your question
                is already here:
              </Text>
              <UnorderedList listStyleType="none" ml={0} spacing={3} mt={4}>
                <ListItem>
                  <Text
                    as={Link}
                    href="/services/acupuncture"
                    fontSize="lg"
                    borderBottom="1px solid"
                    borderColor="transparent"
                    _hover={{
                      color: textHover,
                      borderColor: textHover,
                    }}
                    transition="0.2s ease all"
                    pb={1}
                  >
                    → How Acupuncture Works
                  </Text>
                </ListItem>
                <ListItem>
                  <Text
                    as={Link}
                    href="/services"
                    fontSize="lg"
                    borderBottom="1px solid"
                    borderColor="transparent"
                    _hover={{
                      color: textHover,
                      borderColor: textHover,
                    }}
                    transition="0.2s ease all"
                    pb={1}
                  >
                    → Our Services
                  </Text>
                </ListItem>
                <ListItem>
                  <Text
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://patient.unifiedpractice.com/tidal-acupuncture"
                    fontSize="lg"
                    borderBottom="1px solid"
                    borderColor="transparent"
                    _hover={{
                      color: textHover,
                      borderColor: textHover,
                    }}
                    transition="0.2s ease all"
                    pb={1}
                  >
                    → Online Scheduling
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </ScrollReveal>
        </Grid>
      </Flex>
    </Flex>
  );
};
