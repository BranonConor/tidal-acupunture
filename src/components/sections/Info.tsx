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
    "/icons/phone-light.svg",
  );
  const locationIcon = useColorModeValue(
    "/icons/location-dark.svg",
    "/icons/location-light.svg",
  );
  return (
    <Flex
      position="relative"
      boxSizing="border-box"
      color="brand.royalMoss"
      alignItems={["flex-start"]}
      width="100%"
      justifyContent="center"
      overflow="hidden"
      bg={bg}
      px={[4, 8]}
      py={[16, 24]}
    >
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems={["flex-start"]}
        maxWidth="1440px"
        width="100%"
        color={textColor}
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
                <ListItem>Tuesday: 9:00am - 6:00pm</ListItem>
                <ListItem>Thursday: 9:00am - 6:00pm</ListItem>
                <ListItem>All other days: CLOSED</ListItem>
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
                linkText={
                  <>
                    1515 State Street Suite 1B
                    <br />
                    Santa Barbara, CA 93101
                  </>
                }
                href="https://www.google.com/maps/search/?api=1&query=1515+State+Street+Suite+1B+Santa+Barbara+CA+93101"
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
                src="https://maps.google.com/maps?q=1515%20State%20Street%20Suite%201B%2C%20Santa%20Barbara%2C%20CA%2093101&output=embed"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AspectRatio>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};
