import {
  useColorModeValue,
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Box,
  Grid,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const logo = useColorModeValue("/symbol-dark.svg", "symbol-light.svg");

  return (
    <Grid
      gridGap={4}
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
      bg={bg}
      px={[4, 4, 8]}
      py={[12, 12, 8]}
      color={textColor}
    >
      <Box
        borderRight={["none", "2px solid"]}
        pl={2}
        pr={4}
        py={2}
        boxSizing="border-box"
      >
        <Heading as="h2" size="md" mb={4}>
          {`Tidal Acupuncture © ${new Date().toLocaleString("default", {
            year: "numeric",
          })}`}
        </Heading>
        <Image width={16} height={16} src={logo} />
      </Box>
      <Box
        borderRight={["2px solid", "none", "2px solid"]}
        padding={2}
        boxSizing="border-box"
      >
        <Heading as="h2" size="md">
          Socials
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box borderRight="2px solid" padding={2} boxSizing="border-box">
        <Heading as="h2" size="md">
          Resources
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        borderRight={["2px solid", "none"]}
        padding={2}
        boxSizing="border-box"
      >
        <Heading as="h2" size="md">
          Company
        </Heading>
        <UnorderedList>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
          <ListItem>
            <Text as={Link} href="">
              Link
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Grid>
  );
};
