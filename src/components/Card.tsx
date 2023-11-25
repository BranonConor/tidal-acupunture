import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ICardProps {
  title: string;
  description: string;
  icon?: string;
}

export const Card: React.FC<ICardProps> = ({ title, description, icon }) => {
  return (
    <Box py={12} px={8} borderRadius={2} color="brand.royalMoss">
      {icon && <Image src={icon} pb={4} />}
      <Heading as="h3" size="xl" pb={4}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};
