import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface PageLayoutProps {
  children?: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");

  return (
    <Flex
      as="main"
      bg={bg}
      minHeight="100vh"
      maxWidth="100%"
      flexDirection="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      boxSizing="border-box"
    >
      {children}
    </Flex>
  );
};
