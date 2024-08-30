// For more help visit https://formspr.ee/react-help
import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqgwkoj");

  const bg = useColorModeValue("white", "brand.royalMoss");
  const text = useColorModeValue("brand.royalMoss", "brand.sand");
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const ball = useColorModeValue("/ball-gold.svg", "/ball-mint.svg");

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg={bg}
      boxShadow="lg"
      borderRadius={16}
      padding={8}
      position="relative"
      color={text}
      overflow="hidden"
    >
      <FormControl mb={4} position="relative" zIndex={1}>
        <FormLabel>Full Name*</FormLabel>
        <Input
          disabled={state.succeeded}
          required
          bg={bg}
          boxShadow="md"
          id="name"
          type="text"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </FormControl>
      <FormControl mb={4} position="relative" zIndex={1}>
        <FormLabel>Email Address*</FormLabel>
        <Input
          disabled={state.succeeded}
          required
          bg={bg}
          boxShadow="md"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormControl>
      <FormControl mb={4} position="relative" zIndex={1}>
        <FormLabel>Leave us a message! 😊*</FormLabel>
        <Textarea
          disabled={state.succeeded}
          required
          bg={bg}
          boxShadow="md"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormControl>
      {state.succeeded && (
        <Text color="green" mb={4}>
          ✅ Thanks for your message, we'll get back to you ASAP!
        </Text>
      )}
      <Button variant="primary" type="submit" disabled={state.submitting}>
        Submit
      </Button>
      <Box
        transform="rotate(35deg) scale(1.25)"
        position="absolute"
        zIndex={0}
        bottom={[-16, -24, -16]}
        left={["-30%", "-30%", "-20%"]}
      >
        <Image src={bgImage} minWidth="100%" opacity={0.25} />
      </Box>
      <Box
        transform="scale(1.25)"
        position="absolute"
        zIndex={0}
        top={[-4, -4, -4]}
        right={[-4]}
      >
        <Image src={ball} minWidth="100%" opacity={0.25} />
      </Box>
    </Box>
  );
};
