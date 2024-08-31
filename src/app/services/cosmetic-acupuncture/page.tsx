"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Divider,
  Flex,
  Image,
  Grid,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const cardBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Cosmetic Acupuncture"
        description="How it works, what to expect, and more!"
      />
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="center"
        px={[4, 8]}
        pt={[12, 14]}
        pb={[8, 12]}
        bg={cardBg}
        color={textColor}
        width="100%"
      >
        <Box maxWidth="1440px" width="100%">
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gridGap={8}
            mb={[8, 12, 24]}
            id="acupuncture-process"
          >
            <Box>
              <Image
                src={"/media/clinic/cos-1.png"}
                boxShadow="lg"
                borderRadius={16}
                draggable={false}
              />
            </Box>
            <Flex height="100%" flexDirection="column" justifyContent="center">
              <Heading as="h2">How Does Cosmetic Acupuncture Work? 💭</Heading>
              <Divider borderColor={textColor} mb={8} />
              <Text as="p" mb={8}>
                Skincare with a zen twist, cosmetic acupuncture is a natural
                approach to improve skin health and appearance. The insertion of
                thin needles on the face increases blood flow, enhances collagen
                production, stimulates lymphatic drainage, and reduces
                inflammation and redness.
              </Text>
              <Text as="p" mb={8}>
                Unlike harsh chemical peels and procedures, cosmetic acupuncture
                is a gentle and holistic approach that will reduce the
                appearance of fine lines and wrinkles and rejuvenate dull skin
                while protecting the skin barrier.
              </Text>
            </Flex>
          </Grid>

          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gridGap={8}
            id="acupuncture-process"
          >
            <Flex height="100%" flexDirection="column" justifyContent="center">
              <Heading mb={4} as="h2" size="lg">
                Frequency of Treatment ⏳
              </Heading>
              <Divider borderColor={textColor} mb={8} />
              <Text as="p" mb={8}>
                While results are noticeable after just a few sessions, we
                generally recommend twice per week for 5-7 weeks for lasting
                results.
              </Text>
              <Text as="p" mb={8}>
                Everyone's skin, complexion, and medical history is different,
                so we'll always do our best to keep you informed on our
                recommendations with your specific case in mind!
              </Text>
            </Flex>
            <Box>
              <Image
                src={"/media/clinic/cos-2.png"}
                boxShadow="lg"
                borderRadius={16}
                draggable={false}
              />
            </Box>
          </Grid>
        </Box>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Cosmetic Acupuncture" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
