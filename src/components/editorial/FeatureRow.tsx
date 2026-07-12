"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";
import { Eyebrow } from "./Eyebrow";
import { CornerAccents } from "./CornerAccents";

interface FeatureRowProps {
  eyebrow: string;
  title: React.ReactNode;
  /** Paragraphs (or arbitrary nodes) rendered in the description column. */
  body: React.ReactNode[];
  imageSrc: string;
  imageAlt?: string;
  /** Which side the image sits on at desktop widths. */
  imageSide?: "left" | "right";
  cta?: { label: string; href: string };
  id?: string;
}

/**
 * The signature editorial two-column row: framed photography on one side, an
 * eyebrow → heading → accent bar → prose stack on the other. Collapses to a
 * consistent title → media → description order on mobile so the reading flow
 * always makes sense.
 */
export const FeatureRow: React.FC<FeatureRowProps> = ({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  imageSide = "left",
  cta,
  id,
}) => {
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const accent = useColorModeValue("brand.gold", "brand.mint");

  const desktopAreas =
    imageSide === "left"
      ? `"media title" "media desc"`
      : `"title media" "desc media"`;
  const desktopColumns = imageSide === "left" ? "5fr 7fr" : "7fr 5fr";
  const mediaDirection = imageSide === "left" ? "left" : "right";

  return (
    <Grid
      id={id}
      gridTemplateColumns={["1fr", "1fr", "1fr", desktopColumns]}
      gridTemplateRows={["auto", "auto", "auto", "auto 1fr"]}
      gridTemplateAreas={[
        `"title" "media" "desc"`,
        `"title" "media" "desc"`,
        `"title" "media" "desc"`,
        desktopAreas,
      ]}
      gridColumnGap={[6, 8, 12, 16]}
      gridRowGap={[6, 8, 10, 5]}
      alignItems="start"
      width="100%"
    >
      <ScrollReveal
        gridArea="media"
        direction={mediaDirection}
        mb={[4, 0]}
      >
        <Box position="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width="100%"
            borderRadius={24}
            boxShadow="2xl"
            draggable={false}
          />
          <CornerAccents color={accent} />
        </Box>
      </ScrollReveal>

      <ScrollReveal
        gridArea="title"
        direction={imageSide === "left" ? "right" : "left"}
        delay={0.15}
      >
        <Eyebrow color={textColor} accentColor={accent}>
          {eyebrow}
        </Eyebrow>
        <Heading
          as="h2"
          fontSize={["2xl", "3xl", "4xl"]}
          color={textColor}
          lineHeight={1.15}
        >
          {title}
        </Heading>
      </ScrollReveal>

      <ScrollReveal
        gridArea="desc"
        direction={imageSide === "left" ? "right" : "left"}
        delay={0.25}
      >
        <Flex flexDirection="column" gap={5}>
          {body.map((paragraph, i) => (
            <Text
              key={i}
              as="p"
              color={textColor}
              fontSize={["md", "lg"]}
              lineHeight={1.9}
            >
              {paragraph}
            </Text>
          ))}
        </Flex>
        {cta && (
          <Box mt={8}>
            <Button as={Link} href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </Box>
        )}
      </ScrollReveal>
    </Grid>
  );
};
