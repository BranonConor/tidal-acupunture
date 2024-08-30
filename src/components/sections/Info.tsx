import {
  Flex,
  Heading,
  Divider,
  Grid,
  UnorderedList,
  ListItem,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import { Card } from "../Card";

export const Info = () => {
  const bg = useColorModeValue("brand.wave", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const dividerColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const phoneIcon = useColorModeValue(
    "/icons/phone-dark.svg",
    "/icons/phone-light.svg"
  );
  const locationIcon = useColorModeValue(
    "/icons/location-dark.svg",
    "/icons/location-light.svg"
  );
  return (
    <Flex
      px={[4, 8]}
      py={[16, 24]}
      color={textColor}
      bg={bg}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      boxSizing="border-box"
      maxWidth="1440px"
      width="100%"
    >
      <Heading as="h2" size="2xl">
        Business Info
      </Heading>
      <Divider borderColor={dividerColor} mb={16} />
      <Grid
        gridGap={8}
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        width="100%"
      >
        <Flex flexDirection="column">
          <Flex flexDirection="column">
            <Heading as="h3" size="xl">
              Hours of Operation
            </Heading>
            <UnorderedList py={4}>
              <ListItem>Monday: 9:00am - 6:00pm</ListItem>
              <ListItem>Tuesday: 9:00am - 6:00pm</ListItem>
              <ListItem>Wednesday: 9:00am - 6:00pm</ListItem>
              <ListItem>Thursday: 9:00am - 6:00pm</ListItem>
              <ListItem>Friday: 9:00am - 6:00pm</ListItem>
              <ListItem>Sat-Sun: CLOSED</ListItem>
            </UnorderedList>
            <Card
              title="Phone Number"
              description="(619) 633-7275"
              icon={phoneIcon}
              color={textColor}
            />
            <Card
              title="Location"
              icon={locationIcon}
              color={textColor}
              linkText="1835 El Cajon Blvd Unit A San Diego CA 92103"
              href="https://maps.app.goo.gl/gUmy3PW1t7X88Q3X8"
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" width="100%">
          <AspectRatio
            maxW="100%"
            ratio={1}
            borderRadius={16}
            overflow="hidden"
            boxShadow="lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.407798976671!2d-117.14775932398133!3d32.75491228511468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954e6b37066e7%3A0xaf9cf4bbd2a51d27!2s1835%20El%20Cajon%20Blvd%20a%2C%20San%20Diego%2C%20CA%2092103!5e0!3m2!1sen!2sus!4v1711331550379!5m2!1sen!2sus"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </Flex>
      </Grid>
    </Flex>
  );
};
