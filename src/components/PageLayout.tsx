import { ReactNode } from "react";
import {
  ComponentDefaultProps,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface PageLayoutProps extends ComponentDefaultProps {
  children?: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const updateButtonBg = useColorModeValue(
    "rgba(255, 237, 202, 0.25)",
    "rgba(8, 40, 48, 0.20)"
  );
  const wavingHand = useColorModeValue("👋🏽", "👋🏻");

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
      <Flex
        as={Link}
        href="/#fall-2025-update"
        position="fixed"
        bottom={4}
        right={4}
        zIndex={99}
        bg={updateButtonBg}
        alignItems="center"
        justifyContent="center"
        borderRadius="100%"
        width={12}
        height={12}
        backdropFilter="blur(10px)"
        boxShadow="md"
      >
        <motion.div
          animate={{
            rotate: [0, 0, 45, -15, 50, 0, 45, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1, 2],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            position: "relative",
            left: "-1px",
            top: "1px",
            scale: "1.25",
          }}
        >
          {wavingHand}
        </motion.div>
      </Flex>
    </Flex>
  );
};
