"use client";

import {
  Box,
  useColorModeValue,
  Image,
  Flex,
  Button,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ColorModeButton } from "./ColorModeButton";

export const Navbar: React.FC = () => {
  const logo = useColorModeValue("/logo-dark.svg", "/logo-light.svg");
  const burgerBg = useColorModeValue("brand.royalMoss", "white");
  const bg = useColorModeValue(
    "rgba(255, 237, 202, 0.25)",
    "rgba(8, 40, 48, 0.20)"
  );
  const menuBg = useColorModeValue("brand.gold", "brand.mint");
  const ball = useColorModeValue("/ball-mint.svg", "/ball-gold.svg");

  const [isClicked, setIsClicked] = useState(false);

  return (
    <Flex
      as="nav"
      maxWidth="100%"
      alignItems="center"
      justifyContent="space-between"
      height="64px"
      paddingX={4}
      bgColor="transparent"
      position="fixed"
      top={0}
      left={0}
      zIndex={9999}
      boxSizing="border-box"
      width="100%"
      backdropFilter="blur(10px)"
      bg={bg}
    >
      <Link href="/">
        <Image src={logo} width="128px" />
      </Link>
      <Flex height="100%" alignItems="center" justifyContent="flex-end">
        <Button
          display={["none", "none", "flex"]}
          alignItems="center"
          mr={4}
          variant="primary"
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://tidal.janeapp.com/"
        >
          <Image mr={3} src="/icons/calendar.svg" />
          Book Appointment
        </Button>
        <Button
          display={["none", "none", "flex"]}
          mr={8}
          variant="secondary"
          as="a"
          href="tel:+16196337275"
        >
          (619) 633-7275
        </Button>
        <ColorModeButton />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          as={motion.button}
          ml={[4, 6]}
          mr={isClicked ? 2 : 0}
          width="30px"
          maxWidth="30px"
          initial={{ transform: "scale(1)" }}
          whileHover={{ transform: "scale(1.1)" }}
          whileTap={{ transform: "scale(1.15)" }}
          transition="0.15s ease all"
          transform={`translateX(${isClicked ? "2px" : "0"})`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <Box
            width="30px"
            height="3px"
            borderRadius="10px"
            bg={burgerBg}
            mb={1}
            alignSelf="flex-start"
            transform={`rotate(${isClicked ? "-45deg" : "0"}) translateY(${
              isClicked ? "9.5px" : "0"
            })`}
            transition="0.15s ease all"
          />
          <Box
            width="24px"
            height="3px"
            borderRadius="10px"
            bg={burgerBg}
            mb={1}
            alignSelf="flex-end"
            opacity={isClicked ? "0" : "1"}
            transition="0.15s ease all"
          />
          <Box
            width="30px"
            height="3px"
            borderRadius="10px"
            bg={burgerBg}
            alignSelf="flex-start"
            transform={`rotate(${isClicked ? "45deg" : "0"}) translateY(${
              isClicked ? "-9.5px" : "0"
            })`}
            transition="0.15s ease all"
          />
        </Flex>
      </Flex>

      {isClicked && (
        <Flex
          as={motion.div}
          initial={{ right: -200, top: 64 }}
          animate={{ right: 0, top: 64 }}
          transition={{ type: "spring", duration: "0.1s ease all" }}
          position="fixed"
          zIndex={10}
          width="200px"
          bg={menuBg}
          backdropFilter="blur(10px)"
          height="100vh"
          p={4}
          boxSizing="border-box"
          color="brand.royalMoss"
          boxShadow="lg"
          overflow="hidden"
        >
          <UnorderedList p={0} listStyleType="none">
            <ListItem mb={2}>
              <ChakraLink display="flex" href="/" as={Link}>
                <Image mr={3} src="/icons/home-dark.svg" /> Home
              </ChakraLink>
            </ListItem>
            <ListItem mb={2}>
              <ChakraLink display="flex" href="/team" as={Link}>
                <Image mr={3} src="/icons/about-dark.svg" />
                About Us
              </ChakraLink>
            </ListItem>
            <ListItem mb={2}>
              <ChakraLink
                display="flex"
                href="/services"
                as={Link}
                alignItems="flex-start"
              >
                <Image mr={3} src="/icons/circles-dark.svg" />
                Services & Pricing
              </ChakraLink>
            </ListItem>
            <ListItem mb={2}>
              <ChakraLink display="flex" href="/#contact-us" as={Link}>
                <Image mr={3} src="/icons/contact-dark.svg" />
                Contact
              </ChakraLink>
            </ListItem>
            <ListItem mb={8} display={["block", "block", "none"]}>
              <ChakraLink
                display="flex"
                alignItems="flex-start"
                href="https://tidal.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image mr={3} src="/icons/calendar.svg" />
                Book Appointment
              </ChakraLink>
            </ListItem>
            <ListItem display={["block", "block", "none"]}>
              <Button variant="secondary" as="a" href="tel:+16196337275">
                (619) 633-7275
              </Button>
            </ListItem>
          </UnorderedList>
          <Box
            transform="rotate(35deg) scale(1)"
            position="absolute"
            zIndex={0}
            bottom={16}
            right={-8}
            width="200%"
          >
            <Image src="/waves-moss.svg" minWidth="100%" />
          </Box>
          <Box
            transform="rotate(35deg) scale(1)"
            position="absolute"
            zIndex={0}
            bottom="200px"
            right={20}
          >
            <Image src={ball} width="40px" />
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
