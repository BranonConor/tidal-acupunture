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
      width="100%"
      height="600px"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
      overflow="hidden"
    >
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        px={8}
        py={24}
        position="relative"
        zIndex={1}
      >
        <Box>
          <Heading as="h1" size="4xl" pb={4}>
            Acupuncture for all life's ups and downs.
          </Heading>
          <Text>
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
