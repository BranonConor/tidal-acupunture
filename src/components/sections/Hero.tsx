import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export const Hero = () => {
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");

  return (
    <Flex
      maxWidth="100%"
      minHeight="600px"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
      boxSizing="border-box"
      overflow="hidden"
    >
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        pt={40}
        pb={[4, 8]}
        px={4}
        position="relative"
        zIndex={1}
        boxSizing="border-box"
      >
        <Box width="100%">
          <Heading as="h1" size="4xl" pb={4} maxWidth="100%">
            Acupuncture for all life's highs and lows.
          </Heading>
          <Text maxWidth="100%">
            TIDAL is a boutique Southern Californian acupuncture clinic
            delivering the best care Eastern Medicine has to offer.
          </Text>
        </Box>
      </Box>
      <Box
        transform="rotate(-35deg) scale(1)"
        position="absolute"
        zIndex={0}
        bottom={[-16, -24, -16]}
        right={["-30%", "-30%", "-20%"]}
      >
        <Image src={bgImage} minWidth="100%" />
      </Box>
    </Flex>
  );
};
