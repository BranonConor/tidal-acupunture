import {
  Grid,
  Box,
  Heading,
  Divider,
  useColorModeValue,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  BoxProps,
} from "@chakra-ui/react";
import React from "react";
import { ContactForm } from "../ContactForm";
import Link from "next/link";

export const ContactUs: React.FC = () => {
  const bg = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const innerBg = useColorModeValue("brand.royalMoss", "brand.mauve");
  const text = useColorModeValue("brand.sand", "brand.royalMoss");
  const textHover = useColorModeValue("brand.wave", "brand.darkWave");
  const radius = useColorModeValue(0, 16);
  const padding = useColorModeValue([0, 8], [4, 8]);
  const innerPadding = useColorModeValue([4, 0], [4, 8]);

  return (
    <Flex
      position="relative"
      boxSizing="border-box"
      color={text}
      alignItems={["flex-start"]}
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      id="contact-us"
      px={padding}
    >
      <Flex
        py={[16, 24]}
        px={innerPadding}
        zIndex={1}
        flexDirection="column"
        alignItems={["flex-start"]}
        maxWidth="1440px"
        width="100%"
        bg={innerBg}
        borderTopRightRadius={radius}
        borderTopLeftRadius={radius}
      >
        <Heading as="h2" size="2xl">
          Contact Us
        </Heading>
        <Divider borderColor={text} mb={16} />
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gridGap={8}
          width="100%"
        >
          <Box>
            <ContactForm />
          </Box>
          <Box>
            <Flex flexDirection="column">
              <Heading as="h3" size="lg">
                We can't wait to hear from you.
              </Heading>
              <Text my={4} as="p">
                Here's some quick links just in case the answer to your question
                is already here:
              </Text>
              <UnorderedList py={4}>
                {/* <ListItem>
                <Text
                  textDecoration="underline"
                  _hover={{ color: textHover }}
                  as={Link}
                  href="/frequently-asked-questions"
                >
                  FAQs
                </Text>
              </ListItem> */}
                <ListItem>
                  <Text
                    textDecoration="underline"
                    _hover={{ color: textHover }}
                    as={Link}
                    href="/services/acupuncture"
                  >
                    How Acupuncture Works
                  </Text>
                </ListItem>
                <ListItem>
                  <Text
                    textDecoration="underline"
                    _hover={{ color: textHover }}
                    as={Link}
                    href="/services"
                  >
                    Our Services
                  </Text>
                </ListItem>
                <ListItem>
                  <Text
                    textDecoration="underline"
                    _hover={{ color: textHover }}
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://patient.unifiedpractice.com/tidal-acupuncture"
                  >
                    Online Scheduling
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};
