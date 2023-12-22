import { Image, Heading, Text, Box, Flex } from "@chakra-ui/react";

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
  return (
    <Flex
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      py={[8, 8, 0]}
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
          },
        },
      }}
      position="relative"
      overflow="hidden"
    >
      <Image
        src={image}
        width="100%"
        height="auto"
        boxShadow="md"
        objectFit="cover"
        transition="0.15s ease all"
      />
      <Box
        position="absolute"
        top={[12, 14, 4, 8, 8, 10]}
        left={[4, 12, 10, 12, 16, 16]}
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
        as="a"
        href={link}
        className="meet-the-team"
        width="100%"
        height="25%"
        bg="brand.sand"
        color="brand.royalMoss"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="100%"
        left="0"
        transition="0.25s ease all"
        cursor="pointer"
      >
        <Text as="p">Meet Dr. {name.split(" ")[1]} 👋</Text>
      </Flex>
    </Flex>
  );
};
