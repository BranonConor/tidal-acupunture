import { ComponentDefaultProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface UpdateBannerProps extends ComponentDefaultProps {
  children: ReactNode;
  width?: string;
}

export const UpdateBanner = ({
  children,
  ...otherProps
}: UpdateBannerProps) => {
  return (
    <Flex minHeight={8} padding={4} {...otherProps}>
      {children}
    </Flex>
  );
};
