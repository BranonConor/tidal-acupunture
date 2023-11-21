import { Navbar } from "@/components/Navbar";
import { Box, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      as="main"
      bg="brand.sand"
      minHeight="100vh"
      maxWidth="100%"
      minWidth="100%"
      padding="0"
    >
      <Navbar />
      <Box>Hello!</Box>
      <Image src="/logo-dark.svg" />
    </Box>
  );
}
