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
import { useState, useRef, useEffect } from "react";
import { ColorModeButton } from "./ColorModeButton";

export const Navbar: React.FC = () => {
  const logo = useColorModeValue("/logo-dark.svg", "/logo-light.svg");
  const burgerBg = useColorModeValue("brand.royalMoss", "white");
  const bg = useColorModeValue(
    "rgba(255, 245, 226, 0.65)",
    "rgba(8, 40, 48, 0.65)"
  );
  const menuBg = useColorModeValue("brand.gold", "brand.mint");
  const ball = useColorModeValue("/ball-mint.svg", "/ball-gold.svg");
  const borderColor = useColorModeValue(
    "rgba(8, 40, 48, 0.06)",
    "rgba(255, 245, 226, 0.06)"
  );

  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClicked) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (burgerRef.current?.contains(target)) return;
      setIsClicked(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [isClicked]);

  return (
    <Flex
      as="nav"
      maxWidth="100%"
      alignItems="center"
      justifyContent="center"
      height="72px"
      paddingX={[4, 6, 8]}
      bgColor="transparent"
      position="fixed"
      top={0}
      left={0}
      zIndex={9999}
      boxSizing="border-box"
      width="100%"
      backdropFilter="blur(16px) saturate(1.4)"
      bg={bg}
      borderBottom="1px solid"
      borderBottomColor={borderColor}
      transition="0.3s ease all"
    >
      <Flex
        maxWidth="1200px"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <Image src={logo} width="120px" transition="0.2s ease opacity" _hover={{ opacity: 0.7 }} />
        </Link>

        {/* Right side actions */}
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
            size="sm"
          >
            Book Appointment
          </Button>
          <ColorModeButton />
          <Flex
            ref={burgerRef}
            as="button"
            aria-label="Toggle menu"
            position="relative"
            flexShrink={0}
            ml={[4, 5]}
            width="24px"
            height="18px"
            padding={0}
            border="none"
            background="transparent"
            overflow="visible"
            cursor="pointer"
            sx={{ appearance: "none" }}
            onClick={() => setIsClicked(!isClicked)}
            _hover={{ opacity: 0.7 }}
            transition="opacity 0.2s ease"
          >
            <Box
              position="absolute"
              left={0}
              top="3px"
              width="24px"
              height="2px"
              borderRadius="full"
              bg={burgerBg}
              transformOrigin="center"
              transform={isClicked ? "translateY(5px) rotate(45deg)" : "none"}
              transition="transform 0.25s ease"
            />
            <Box
              position="absolute"
              left={0}
              top="8px"
              width="24px"
              height="2px"
              borderRadius="full"
              bg={burgerBg}
              opacity={isClicked ? 0 : 1}
              transition="opacity 0.2s ease"
            />
            <Box
              position="absolute"
              left={0}
              top="13px"
              width="24px"
              height="2px"
              borderRadius="full"
              bg={burgerBg}
              transformOrigin="center"
              transform={isClicked ? "translateY(-5px) rotate(-45deg)" : "none"}
              transition="transform 0.25s ease"
            />
          </Flex>
        </Flex>
      </Flex>

      {isClicked && (
        <Flex
          ref={menuRef}
          as={motion.div}
          initial={{ right: -240, top: 72 }}
          animate={{ right: 0, top: 72 }}
          transition={{ type: "spring", duration: "0.1s ease all" }}
          position="fixed"
          zIndex={10}
          width="240px"
          bg={menuBg}
          backdropFilter="blur(16px)"
          height="100vh"
          p={6}
          boxSizing="border-box"
          color="brand.royalMoss"
          boxShadow="2xl"
          overflow="hidden"
        >
          <UnorderedList p={0} listStyleType="none" spacing={4}>
            <ListItem>
              <ChakraLink
                display="flex"
                href="/"
                as={Link}
                fontWeight="600"
                onClick={() => setIsClicked(false)}
              >
                <Image mr={3} src="/icons/home-dark.svg" width="18px" /> Home
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                display="flex"
                href="/team"
                as={Link}
                fontWeight="600"
                onClick={() => setIsClicked(false)}
              >
                <Image mr={3} src="/icons/about-dark.svg" width="18px" />
                About Us
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                display="flex"
                href="/services"
                as={Link}
                alignItems="flex-start"
                fontWeight="600"
                onClick={() => setIsClicked(false)}
              >
                <Image mr={3} src="/icons/circles-dark.svg" width="18px" />
                Services & Pricing
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                display="flex"
                href="/#contact-us"
                as={Link}
                fontWeight="600"
                onClick={() => setIsClicked(false)}
              >
                <Image mr={3} src="/icons/contact-dark.svg" width="18px" />
                Contact
              </ChakraLink>
            </ListItem>
            <ListItem mt={8} display={["block", "block", "none"]}>
              <Button
                variant="secondary"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://tidal.janeapp.com/"
                width="100%"
                size="sm"
              >
                Book Appointment
              </Button>
            </ListItem>
            <ListItem display={["block", "block", "none"]}>
              <Button variant="secondary" as="a" href="tel:+16196337275" width="100%" size="sm">
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
            <Image src="/waves-moss.svg" minWidth="100%" opacity={0.3} />
          </Box>
          <Box
            transform="rotate(35deg) scale(1)"
            position="absolute"
            zIndex={0}
            bottom="200px"
            right={20}
          >
            <Image src={ball} width="36px" opacity={0.6} />
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
