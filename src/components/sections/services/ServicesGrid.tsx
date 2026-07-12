"use client";

import { Grid, Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Card } from "../../Card";
export interface Service {
  icon: string;
  title: string;
  description: ReactNode;
  priceItem?: ReactNode;
}
interface ServicesGridProps {
  services: Service[];
  textColor: string;
  showPrices?: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  textColor,
  showPrices = false,
}) => {
  const borderColor = useColorModeValue(
    "rgba(8, 40, 48, 0.12)",
    "rgba(255, 245, 226, 0.12)"
  );
  const accentColor = useColorModeValue("brand.gold", "brand.mint");

  return (
    <Grid
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      width="100%"
      gridGap={0}
      pt={8}
      color={textColor}
    >
      {services.map((service) => (
        <Box
          key={service.title}
          py={8}
          px={[0, 4, 6]}
          borderTop="1px solid"
          borderColor={borderColor}
          position="relative"
          _hover={{
            "& .service-card-accent": {
              width: "40px",
              opacity: 1,
            },
          }}
        >
          <Box
            className="service-card-accent"
            position="absolute"
            top={0}
            left={[0, 4, 6]}
            width="0px"
            height="2px"
            bg={accentColor}
            transition="0.4s ease all"
            opacity={0}
          />
          <Card
            color={textColor}
            icon={service.icon}
            title={service.title}
            description={service.description}
            priceItem={showPrices && service.priceItem}
          />
        </Box>
      ))}
    </Grid>
  );
};
