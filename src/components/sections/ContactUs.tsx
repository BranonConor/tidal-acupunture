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

interface ContactUsProps extends Omit<BoxProps, "radius"> {
  radius: number;
}

export const ContactUs: React.FC<ContactUsProps> = ({ radius }) => {
  const bg = useColorModeValue("brand.royalMoss", "brand.mauve");
  const text = useColorModeValue("brand.sand", "brand.royalMoss");
  const textHover = useColorModeValue("brand.wave", "brand.darkWave");

  return (
    <Flex
      flexDirection={["column"]}
      px={[4, 8]}
      py={[16, 24]}
      boxSizing="border-box"
      width="100%"
      maxWidth="1440px"
      bg={bg}
      color={text}
      position="relative"
      overflow="hidden"
      borderTopRadius={radius}
      id="contact-us"
    >
      <Heading as="h2" size="2xl">
        Contact Us
      </Heading>
      <Divider borderColor={text} mb={16} />
      <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gridGap={8}>
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
  );
};
