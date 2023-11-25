import { Flex, useColorModeValue, Box, Image, Heading } from "@chakra-ui/react";
export const Services = () => {
  const bg = useColorModeValue("brand.sand", "brand.mauve");
  return (
    <Flex
      height="600px"
      bg={bg}
      overflow="hidden"
      position="relative"
      px={8}
      py={24}
      justifyContent="flex-end"
      color="brand.royalMoss"
    >
      <Box zIndex={1}>
        <Heading as="h2" size="2xl">
          Our Services
        </Heading>
      </Box>
      <Box
        transform="rotate(-215deg) scale(1)"
        position="absolute"
        zIndex={0}
        top={[-16, -24, -16]}
        left={["-30%", "-30%", "-300px"]}
      >
        <Image src="waves-moss.svg" minWidth="100%" />
      </Box>
    </Flex>
  );
};
