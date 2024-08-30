import {
  Image,
  Heading,
  Text,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

interface ITeamCardProps {
  image: string;
  name: string;
  role: string;
  link: string;
}

export const TeamCard: React.FC<ITeamCardProps> = ({
  image,
  name,
  role,
  link,
}) => {
  const buttonBg = useColorModeValue("brand.sand", "brand.mauve");

  return (
    <Flex
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        "&:hover": {
          img: {
            transform: "scale(0.9)",
          },

          ".meet-the-team": {
            top: "75%",
          },
          ".text": {
            top: "10%",
            transform: "scale(0.9)",

            "@media only screen and (max-width: 630px)": {
              top: "12.5%",
            },
            "@media only screen and (max-width: 400px)": {
              top: "15%",
              left: "16px",
            },
          },
        },
      }}
      position="relative"
      overflow="hidden"
      borderRadius={16}
    >
      <Image
        src={image}
        width="100%"
        height="auto"
        boxShadow="md"
        objectFit="cover"
        transition="0.15s ease all"
        borderRadius={16}
      />
      <Box
        position="absolute"
        top={[12, 14, 4, 8, 8, 10]}
        left={[4, 8, 4, 12, 16, 16]}
        color="brand.royalMoss"
        maxWidth="100%"
        className="text"
        transition="0.3s ease all"
      >
        <Heading as="h3" size={["xl", "xl", "xl", "xl", "xl"]}>
          {name}
        </Heading>
        <Text as="p">{role}</Text>
      </Box>
      <Flex
        as={Link}
        href={link}
        className="meet-the-team"
        width="100%"
        height="25%"
        bg={buttonBg}
        color="brand.royalMoss"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="100%"
        left="0"
        transition="0.25s ease all"
        cursor="pointer"
        borderRadius={16}
        boxShadow="lg"
      >
        <Text as="p">Meet Dr. {name.split(" ")[2]} 👋</Text>
      </Flex>
    </Flex>
  );
};
