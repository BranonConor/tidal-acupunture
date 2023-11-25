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
      py={24}
      color="brand.sand"
      bg="brand.royalMoss"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      boxSizing="border-box"
    >
      <Heading as="h2" size="2xl">
        The TIDAL Team
      </Heading>
      <Divider borderColor="brand.sand" mb={8} />
      <Grid width="100%" gridTemplateColumns={["1fr", "1fr", "2fr 1fr 1fr"]}>
        <Box mb={[4, 4, 0]}>
          <Text mb={8}>
            Nice to meet you! We're Drs. Eusebio and Anderson, and we're the
            founders of TIDAL Acupuncture. We specialize in Women's Health and
            Sports Medicine respectively, but we're trained to offer a wide
            variety of treatments.
          </Text>
          <Button>Learn more</Button>
        </Box>

        <TeamCard
          name="Rachel Eusebio"
          role="Doctor of Acupuncture (DAACM)"
          image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        />
        <TeamCard
          name="Hannah Anderson"
          role="Doctor of Acupuncture (DAACM)"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
        />
      </Grid>
    </Flex>
  );
};
