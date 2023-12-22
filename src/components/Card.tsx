import { Box, Heading, Text, Image } from "@chakra-ui/react";

interface ICardProps {
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

export const Card: React.FC<ICardProps> = ({
  title,
  description,
  icon,
  color = "brand.royalMoss",
}) => {
  return (
    <Box py={8} borderRadius={2} color={color}>
      {icon && <Image src={icon} pb={4} />}
      <Heading as="h3" size="xl" pb={4}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};
