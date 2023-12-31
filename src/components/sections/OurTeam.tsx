import {
  Flex,
  Heading,
  Divider,
  Grid,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { TeamCard } from "../TeamCard";

export const OurTeam = () => {
  return (
    <Flex
      px={[4, 8]}
      py={[16, 24]}
      color="brand.sand"
      bg="brand.royalMoss"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      boxSizing="border-box"
      borderRadius={16}
      mb={8}
    >
      <Heading as="h2" size="2xl">
        The TIDAL Team
      </Heading>
      <Divider borderColor="brand.sand" mb={8} />
      <Box mb={[4, 4, 8]}>
        <Text mb={8}>
          Nice to meet you! We're Drs. Eusebio and Anderson, and we're the
          founders of TIDAL Acupuncture. We specialize in Women's Health and
          Sports Medicine respectively, but we're trained to offer a wide
          variety of treatments.
        </Text>
        <Button>Learn more</Button>
      </Box>
      <Grid
        width="100%"
        gridGap={8}
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        py={[8, 12]}
      >
        <TeamCard
          name="Dr. Rachel Eusebio"
          role="Doctor of Acupuncture (DACM)"
          image="/media/rachel.png"
          link="/team/rachel-eusebio"
        />
        <TeamCard
          name="Dr. Hannah Anderson"
          role="Doctor of Acupuncture (DACM)"
          image="/media/hannah.png"
          link="/team/hannah-anderson"
        />
      </Grid>
    </Flex>
  );
};
