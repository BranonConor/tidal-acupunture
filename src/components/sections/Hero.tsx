import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export const Hero = () => {
  const logo = useColorModeValue("/symbol-dark.svg", "/symbol-light.svg");

  return (
    <Flex
      width="100%"
      height="600px"
      flexDirection="column"
      justifyContent="space-between"
      position="relative"
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" px={8} py={24}>
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
      <Image
        position="absolute"
        zIndex={0}
        bottom={[-24, 8, 32]}
        right={4}
        src={logo}
        width={["200px", "300px", "400px"]}
        opacity={[1, 0.5, 1]}
      />
    </Flex>
  );
};
