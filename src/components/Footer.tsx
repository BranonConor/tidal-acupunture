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
} from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  const bg = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const textColor = useColorModeValue("brand.sand", "brand.sand");
  const logo = useColorModeValue("/symbol-light.svg", "/symbol-light.svg");
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");

  return (
    <Flex
      bg={bg}
      width="100%"
      borderTop="2px solid"
      borderTopColor={textColor}
      justifyContent="center"
      overflow="hidden"
      position="relative"
    >
      <Grid
        gridGap={4}
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        px={[4, 8]}
        py={[12, 12, 8]}
        color={textColor}
        maxWidth="1440px"
        width="100%"
      >
        <Box boxSizing="border-box" position="relative" zIndex={1}>
          <Image width={16} height={16} mb={4} src={logo} />
          <Heading as="h2" size="sm">
            {`Tidal Acupuncture © ${new Date().toLocaleString("default", {
              year: "numeric",
            })}`}
          </Heading>
        </Box>
        <Box
          position="relative"
          zIndex={1}
          borderLeft="2px solid"
          pl={4}
          boxSizing="border-box"
        >
          <Heading as="h2" size="md">
            Resources 📁
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text
                as={Link}
                href="/services/acupuncture"
                textDecoration="underline"
              >
                How Acupuncture Works
              </Text>
            </ListItem>
            <ListItem>
              <Text
                as="a"
                href="https://patient.unifiedpractice.com/tidal-acupuncture"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
              >
                Patient Portal
              </Text>
            </ListItem>
            <ListItem>
              <Text
                as="a"
                href="https://patient.unifiedpractice.com/tidal-acupuncture"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
              >
                Online Scheduling
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          position="relative"
          zIndex={1}
          borderLeft={["2px solid"]}
          pl={4}
          boxSizing="border-box"
        >
          <Heading as="h2" size="md">
            Socials ✨
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text
                as={Link}
                href="https://www.instagram.com/tidalacupuncture/"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
                _hover={{
                  color: "brand.wave",
                }}
              >
                Instagram
              </Text>
            </ListItem>
            <ListItem>
              <Text
                as={Link}
                href="https://www.facebook.com/tidalacupuncture"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
                _hover={{
                  color: "brand.wave",
                }}
              >
                Facebook
              </Text>
            </ListItem>
            <ListItem>
              <Text
                as={Link}
                href="https://www.tiktok.com/@tidal_acupuncture"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
                _hover={{
                  color: "brand.wave",
                }}
              >
                Tiktok
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          position="relative"
          zIndex={1}
          borderLeft={["2px solid"]}
          pl={4}
          boxSizing="border-box"
        >
          <Heading as="h2" size="md">
            Company 🤝
          </Heading>
          <UnorderedList>
            <ListItem>
              <Text as={Link} href="/team" textDecoration="underline">
                Who We Are
              </Text>
            </ListItem>
            <ListItem>
              <Text as={Link} href="" textDecoration="underline">
                Terms & Conditions
              </Text>
            </ListItem>
            <ListItem>
              <Text
                as={Link}
                href="https://www.linkedin.com/company/tidal-acupuncture-inc/"
                target="_blank"
                rel="noopenner noreferrer"
                textDecoration="underline"
              >
                LinkedIn
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Grid>
      <Box
        transform="rotate(-35deg) scale(1)"
        position="absolute"
        zIndex={0}
        bottom={[-16, -24, -16]}
        right={["-25%", "-20%", "-10%"]}
      >
        <Image src={bgImage} minWidth="100%" opacity={0.25} />
      </Box>
    </Flex>
  );
};
