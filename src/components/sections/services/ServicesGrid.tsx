import { Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Card } from "../../Card";

interface ServicesGridProps {
  textColor: string;
  iconMode?: "light" | "dark";
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  textColor,
  iconMode = "dark",
}) => {
  return (
    <Grid
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      width={["100%"]}
      gridGap={[4, 4, 8]}
      pt={8}
      color={textColor}
    >
      <Card
        color={textColor}
        icon={`/icons/needles-${iconMode}.svg`}
        title="Acupuncture"
        description="A comprehensive needling approach that seamlessly blends Chinese medicine theory and biomedical knowledge"
      />
      <Card
        color={textColor}
        icon={`/icons/cosmetic-${iconMode}.svg`}
        title="Cosmetic Acupuncture"
        description="Skincare with a zen twist, cosmetic acupuncture is a natural approach to improve skin health and appearance"
      />
      <Card
        color={textColor}
        icon={`/icons/cupping-${iconMode}.svg`}
        title="Cupping"
        description="Traditional fire cupping to ease pain, release muscle tension, and reduce inflammation"
      />
      <Card
        color={textColor}
        icon={`/icons/fire-${iconMode}.svg`}
        title="Herbal Medicine"
        description="Tailored herbal tinctures and remedies for a myriad of conditions and complaints"
      />
      <Card
        color={textColor}
        icon={`/icons/pen-${iconMode}.svg`}
        title="Microneedling"
        description="A minimally invasive cosmetic procedure that improves skin texture, wrinkles, and scars"
      />
    </Grid>
  );
};
