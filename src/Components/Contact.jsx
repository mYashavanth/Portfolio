import React, { useContext, useState } from "react";
import {
  Box,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  useBreakpointValue,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();
  const { isDark } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://sheetdb.io/api/v1/tvcfipr8wiepu", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              id: "INCREMENT",
              Name: name,
              Email: email,
              Message: message,
              created_at: "DATETIME",
            },
          ],
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        toast({
          title: "Success!",
          description: "Your message has been sent!",
          status: "success",
          duration: 7000,
          isClosable: true,
        });
        setEmail("");
        setMessage("");
        setName("");
      } else {
        console.error("Server response:", res.status, resJson);
        toast({
          title: "Error!",
          description: "An error occurred while sending your message.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while sending your message.");
    }
  };
  return (
    <>
      <Box id="contact-section" pb={16}>
        <Heading w={["90%", "90%", "80%", "80%"]} m={"auto"} p={4}>
          Contact
        </Heading>
        <Box
          _hover={{
            boxShadow: "2xl",
            transform: "scale(1.02)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
          borderRadius={{ base: "none", md: "xl" }}
          className="contact"
          boxShadow={{ base: "none", md: "xl" }}
          mx="auto"
          w={{ base: "90%", md: "40%" }}
          p={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Box mb={4} mx="auto" textAlign="center">
            <Heading>Get in touch</Heading>
          </Box>
          <Stack as={"form"} spacing={4} onSubmit={handleSubmit}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                _hover={{
                  border: isDark ? "1px solid black" : "1px solid teal",
                }}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _hover={{
                  border: isDark ? "1px solid black" : "1px solid teal",
                }}
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Input
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                _hover={{
                  border: isDark ? "1px solid black" : "1px solid teal",
                }}
              />
            </FormControl>
            <Button
              backgroundColor={isDark ? "gray.900" : "teal"}
              color={"white"}
              p={2}
              borderRadius={"5px"}
              w={"100%"}
              _hover={{
                backgroundColor: isDark ? "gray.300" : "teal.200",
                color: isDark ? "gray.900" : "teal.600",
              }}
              letterSpacing={0.5}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
