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
import Link from "next/link";

export const OurTeam = () => {
  return (
    <Flex
      px={[4, 8]}
      bg="brand.royalMoss"
      width="100%"
      justifyContent="center"
      position="relative"
      zIndex={0}
    >
      <Flex
        py={[16, 24]}
        color="brand.sand"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        boxSizing="border-box"
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        mb={8}
        maxWidth="1440px"
        width="100%"
      >
        <Heading as="h2" size="2xl">
          The TIDAL Team
        </Heading>
        <Divider borderColor="brand.sand" mb={8} />
        <Box mb={[8, 12, 16]}>
          <Text mb={8}>
            Nice to meet you! I'm Dr. Eusebio, founder of TIDAL Acupuncture. I
            offer a unique focus on women's health and sports medicine, but I am
            broadly trained to treat a wide variety of conditions.
          </Text>
          <Button as={Link} href="/team" variant="primary">
            Meet our team
          </Button>
        </Box>
        <Grid
          width="100%"
          gridGap={8}
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        >
          <TeamCard
            name="Dr. Rachel Eusebio"
            role="Doctor of Acupuncture (DACM)"
            image="/media/rachel.png"
            link="/team/rachel-eusebio"
          />
        </Grid>
      </Flex>
    </Flex>
  );
};
