import { Text } from "@chakra-ui/react";

interface PriceItemProps {
  text: string;
}

export const PriceItem: React.FC<PriceItemProps> = ({ text }) => {
  return <Text size="sm">{text}</Text>;
};
