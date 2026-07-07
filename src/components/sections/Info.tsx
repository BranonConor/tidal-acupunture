"use client";

import {
  Flex,
  Heading,
  Grid,
  UnorderedList,
  ListItem,
  AspectRatio,
  useColorModeValue,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { ScrollReveal } from "../ScrollReveal";

export const Info = () => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const phoneIcon = useColorModeValue(
    "/icons/phone-dark.svg",
    "/icons/phone-light.svg"
  );
  const locationIcon = useColorModeValue(
    "/icons/location-dark.svg",
    "/icons/location-light.svg"
  );

  return (
    <Flex
      position="relative"
      boxSizing="border-box"
      alignItems="flex-start"
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      px={[6, 8, 12]}
      py={[12, 16, 20]}
    >
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="flex-start"
        maxWidth="1200px"
        width="100%"
        color={textColor}
      >
        <Grid
          gridTemplateRows={["auto", "auto", "auto 1fr"]}
          gridColumnGap={[6, 8, 12, 16]}
          gridRowGap={[6, 8, 5]}
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gridTemplateAreas={[
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"title media" "desc media"`,
          ]}
          width="100%"
          alignItems="start"
        >
          <ScrollReveal gridArea="title" delay={0.1}>
            <Box>
              <Text
                textTransform="uppercase"
                letterSpacing="0.2em"
                fontSize="xs"
                fontWeight="bold"
                color={accentColor}
                mb={4}
              >
                Visit Us
              </Text>
              <Heading
                as="h2"
                fontSize={["2xl", "3xl", "4xl"]}
                lineHeight={1.15}
              >
                Business Info
              </Heading>
            </Box>
          </ScrollReveal>

          <ScrollReveal gridArea="desc" delay={0.15}>
            <Flex flexDirection="column" gap={8} pt={[0, 0, 8]}>
              {/* Hours */}
              <Box>
                <Heading as="h3" fontSize="xl" mb={4}>
                  Hours of Operation
                </Heading>
                <UnorderedList
                  listStyleType="none"
                  ml={0}
                  spacing={2}
                  color={subtleText}
                  fontSize="lg"
                >
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    maxWidth={["100%", "100%", "280px"]}
                    borderBottom="1px solid"
                    borderColor={useColorModeValue(
                      "rgba(8, 40, 48, 0.08)",
                      "rgba(255, 245, 226, 0.08)"
                    )}
                    pb={2}
                  >
                    <Text>Tuesday</Text>
                    <Text>9:00am – 6:00pm</Text>
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    maxWidth={["100%", "100%", "280px"]}
                    borderBottom="1px solid"
                    borderColor={useColorModeValue(
                      "rgba(8, 40, 48, 0.08)",
                      "rgba(255, 245, 226, 0.08)"
                    )}
                    pb={2}
                  >
                    <Text>Thursday</Text>
                    <Text>9:00am – 6:00pm</Text>
                  </ListItem>
                  <ListItem
                    display="flex"
                    justifyContent="space-between"
                    maxWidth={["100%", "100%", "280px"]}
                  >
                    <Text>All other days</Text>
                    <Text>Closed</Text>
                  </ListItem>
                </UnorderedList>
              </Box>

              {/* Contact details */}
              <Flex alignItems="center" gap={3}>
                <Image src={phoneIcon} width="20px" />
                <Text
                  as="a"
                  href="tel:+16196337275"
                  fontSize="lg"
                  _hover={{ color: accentColor }}
                  transition="0.2s ease color"
                >
                  (619) 633-7275
                </Text>
              </Flex>

              <Flex alignItems="flex-start" gap={3}>
                <Image src={locationIcon} width="20px" mt={1} />
                <Text
                  as="a"
                  href="https://www.google.com/maps/search/?api=1&query=1515+State+Street+Suite+1B+Santa+Barbara+CA+93101"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="lg"
                  _hover={{ color: accentColor }}
                  transition="0.2s ease color"
                >
                  1515 State Street Suite 1B
                  <br />
                  Santa Barbara, CA 93101
                </Text>
              </Flex>
            </Flex>
          </ScrollReveal>

          <ScrollReveal gridArea="media" delay={0.2} mb={[4, 0]}>
            <Flex flexDirection="column" gap={[6, 8]}>
              <AspectRatio
                ratio={[16 / 10, 16 / 10, 16 / 9]}
                borderRadius={24}
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src="/media/clinic/door.png"
                  objectFit="cover"
                  draggable={false}
                  alt="TIDAL Acupuncture entrance"
                />
              </AspectRatio>
              <AspectRatio
                maxW="100%"
                ratio={[16 / 10, 16 / 10, 16 / 9]}
                borderRadius={24}
                overflow="hidden"
                boxShadow="2xl"
              >
                <iframe
                  src="https://maps.google.com/maps?q=1515%20State%20Street%20Suite%201B%2C%20Santa%20Barbara%2C%20CA%2093101&output=embed"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </AspectRatio>
            </Flex>
          </ScrollReveal>
        </Grid>
      </Flex>
    </Flex>
  );
};
