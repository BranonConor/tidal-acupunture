import { Grid } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Card } from "../../Card";
export interface Service {
  icon: string;
  title: string;
  description: string;
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
  return (
    <Grid
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      width="100%"
      gridGap={[4, 4, 8]}
      pt={8}
      color={textColor}
    >
      {services.map((service) => (
        <Card
          color={textColor}
          icon={service.icon}
          title={service.title}
          description={service.description}
          priceItem={showPrices && service.priceItem}
        />
      ))}
    </Grid>
  );
};
