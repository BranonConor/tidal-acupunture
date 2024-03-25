import { Box, Heading, Text, Image, CardProps } from "@chakra-ui/react";

interface ICardProps extends CardProps {
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  linkText?: string;
  href?: string;
}

export const Card: React.FC<ICardProps> = ({
  title,
  description,
  icon,
  color = "brand.royalMoss",
  linkText,
  href,
}) => {
  return (
    <Box py={8} borderRadius={2} color={color}>
      {icon && <Image src={icon} pb={4} />}
      <Heading as="h3" size="xl" pb={4}>
        {title}
      </Heading>
      {description && <Text>{description}</Text>}
      {linkText && href && (
        <Text
          textDecoration="underline"
          as="a"
          _hover={{ color: "brand.darkWave" }}
          href={href}
          target="_blank"
          rel="noopenner noreferrer"
        >
          {linkText}
        </Text>
      )}
    </Box>
  );
};
