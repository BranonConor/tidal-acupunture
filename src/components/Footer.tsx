"use client";

import {
  useColorModeValue,
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Box,
  Grid,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export const Footer = () => {
  const bg = "brand.royalMoss";
  const textColor = "brand.sand";
  const subtleText = "brand.wave";
  const logo = useColorModeValue("/symbol-light.svg", "/symbol-light.svg");
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const hoverColor = useColorModeValue("brand.gold", "brand.mint");

  return (
    <Flex
      flexDirection="column"
      bg={bg}
      width="100%"
      overflow="hidden"
      position="relative"
    >
      {/* Pre-footer CTA band */}
      <Flex
        width="100%"
        justifyContent="center"
        px={[6, 8, 12]}
        py={[10, 12, 14]}
        borderTop="1px solid"
        borderTopColor="rgba(255, 245, 226, 0.08)"
      >
        <Flex
          maxWidth="1200px"
          width="100%"
          flexDirection={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          justifyContent="space-between"
          gap={6}
        >
          <Box>
            <Heading
              as="h3"
              fontSize={["xl", "2xl"]}
              color={textColor}
              mb={2}
            >
              Ready to ride the wave?
            </Heading>
            <Text color={subtleText} fontSize="lg">
              Book your appointment and start your wellness journey today.
            </Text>
          </Box>
          <Button
            as="a"
            href="https://tidal.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            px={8}
          >
            Book Appointment
          </Button>
        </Flex>
      </Flex>

      {/* Main footer */}
      <Flex
        width="100%"
        justifyContent="center"
        borderTop="1px solid"
        borderTopColor="rgba(255, 245, 226, 0.08)"
        position="relative"
      >
        <Grid
          gridGap={[6, 8]}
          gridTemplateColumns={["1fr", "1fr 1fr", "2fr 1fr 1fr 1fr"]}
          px={[6, 8, 12]}
          py={[12, 16]}
          color={textColor}
          maxWidth="1200px"
          width="100%"
          position="relative"
          zIndex={1}
        >
          <Box boxSizing="border-box">
            <Image width={12} height={12} mb={4} src={logo} opacity={0.9} />
            <Heading as="h2" fontSize="sm" color={subtleText} fontWeight="400">
              {`TIDAL Acupuncture © ${new Date().toLocaleString("default", {
                year: "numeric",
              })}`}
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.15em"
              fontWeight="bold"
              color={accentColor}
              mb={4}
            >
              Resources
            </Text>
            <UnorderedList listStyleType="none" ml={0} spacing={2}>
              <ListItem>
                <Text
                  as={Link}
                  href="/services/acupuncture"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  How Acupuncture Works
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="a"
                  href="https://patient.unifiedpractice.com/tidal-acupuncture"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Patient Portal
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="a"
                  href="https://patient.unifiedpractice.com/tidal-acupuncture"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Online Scheduling
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.15em"
              fontWeight="bold"
              color={accentColor}
              mb={4}
            >
              Socials
            </Text>
            <UnorderedList listStyleType="none" ml={0} spacing={2}>
              <ListItem>
                <Text
                  as={Link}
                  href="https://www.instagram.com/tidalacupuncture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Instagram
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as={Link}
                  href="https://www.facebook.com/tidalacupuncture"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Facebook
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as={Link}
                  href="https://www.tiktok.com/@tidal_acupuncture"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  TikTok
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.15em"
              fontWeight="bold"
              color={accentColor}
              mb={4}
            >
              Company
            </Text>
            <UnorderedList listStyleType="none" ml={0} spacing={2}>
              <ListItem>
                <Text
                  as={Link}
                  href="/team"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Who We Are
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as={Link}
                  href="/terms"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  Terms & Conditions
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as={Link}
                  href="https://www.linkedin.com/company/tidal-acupuncture-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={subtleText}
                  _hover={{ color: hoverColor }}
                  transition="0.2s ease color"
                  fontSize="sm"
                >
                  LinkedIn
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Grid>

        {/* Background wave */}
        <Box
          position="absolute"
          zIndex={0}
          bottom={["-60%", "-70%", "-55%"]}
          right={["-70%", "-55%", "-30%"]}
          opacity={0.05}
          animation="waveFloat 12s ease-in-out infinite"
        >
          <Image src={bgImage} minWidth={["1100px", "1400px", "1700px"]} />
        </Box>
      </Flex>
    </Flex>
  );
};
