import { Image, Heading, Text, Stack } from "@chakra-ui/react";

interface ITeamCardProps {
  image: string;
  name: string;
  role: string;
}

export const TeamCard: React.FC<ITeamCardProps> = ({ image, name, role }) => {
  return (
    <Stack
      spacing={4}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      px={4}
      py={[8, 8, 0]}
      sx={{
        "&:hover": {
          img: {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Image
        src={image}
        width="100px"
        height="100px"
        borderRadius="100%"
        boxShadow="md"
        objectFit="cover"
        transition="0.15s ease all"
      />
      <Heading as="h3" size="l">
        {name}
      </Heading>
      <Text as="p">{role}</Text>
    </Stack>
  );
};
