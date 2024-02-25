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
  const emailIcon = useColorModeValue(
    "/icons/email-dark.svg",
    "/icons/email-light.svg"
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
      borderTopRightRadius={16}
      borderTopLeftRadius={16}
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
              <ListItem>Monday: 9:00pm - 6:00pm</ListItem>
              <ListItem>Tuesday: 9:00pm - 6:00pm</ListItem>
              <ListItem>Wednesday: 9:00pm - 6:00pm</ListItem>
              <ListItem>Thursday: 9:00pm - 6:00pm</ListItem>
              <ListItem>Friday: 9:00pm - 6:00pm</ListItem>
              <ListItem>Sat-Sun: CLOSED</ListItem>
            </UnorderedList>
            <Card
              title="Phone Number"
              description="(619) 633-7275"
              icon={phoneIcon}
              color={textColor}
            />
            <Card
              title="Email"
              description="tidalacupuncture@gmail.com"
              icon={emailIcon}
              color={textColor}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" width="100%">
          <AspectRatio
            maxW="100%"
            ratio={1}
            borderRadius={8}
            overflow="hidden"
            boxShadow="lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5243506268553!2d-117.1630024229489!3d32.77835338391539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955479e2d983f%3A0xddc0bb1b08d03fc2!2sPacific%20College%20of%20Health%20and%20Science%20-%20San%20Diego%20Massage%20Therapy%20%26%20Acupuncture%20School!5e0!3m2!1sen!2sus!4v1703276721619!5m2!1sen!2sus"
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
