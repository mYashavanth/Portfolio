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
  Text,
  Center,
} from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";

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

  const handleLinkedIN = () => {
    window.open(
      "https://www.linkedin.com/in/yashavantha-m-299a17209/",
      "_blank"
    );
  };
  const handleGitHub = () => {
    window.open("https://github.com/mYashavanth", "_blank");
  };

  return (
    <>
      <Box id="contact-section" pb={1} pt={[8, 16, 24, 24]}>
        <Heading
          w={["90%", "90%", "80%", "80%"]}
          m={"auto"}
          p={4}
          textAlign={"center"}
          mb={[4, 4, 8, 8]}
          size={{ base: "xl", md: "2xl" }}
        >
          Contact
        </Heading>
        <Box
          _hover={{
            boxShadow: "2xl",
            transform: "scale(1.02)",
            transition: "all 0.5s ease",
          }}
          className="contact"
          boxShadow={{ base: "none", md: "xl" }}
          mx="auto"
          w={{ base: "90%", md: "40%" }}
          p={useBreakpointValue({ base: 4, md: 8 })}
          backgroundColor={isDark ? "gray.200" : "white"}
          borderRadius={{ base: "10px", md: "20px" }}
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
                border={"1px solid gray"}
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
                border={"1px solid gray"}
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
                border={"1px solid gray"}
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

        <Box
          backgroundColor={isDark ? "gray.900" : "teal.600"}
          color="white"
          mt={8}
          p={4}
        >
          <Box textAlign={"center"}>
            <Heading size={{ base: "md", md: "lg" }}>Yashavantha M</Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Aspiring Full-Stack Web Developer
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-evenly"}
            p={4}
          >
            <Box display={"flex"} flexDirection={"column"} gap={2} mb={4}>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <TfiEmail />
                <Text>yashavantham143@gmail.com</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <ImMobile />
                <Text>+91 9481726689</Text>
              </Box>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={6}>
              <Box
                borderRadius={"5px"}
                onClick={handleLinkedIN}
                _hover={{
                  backgroundColor: isDark ? "gray.300" : "teal.200",
                  color: isDark ? "gray.900" : "teal.600",
                }}
                cursor={"pointer"}
              >
                <FaLinkedinIn size={20} />
              </Box>
              <Box
                borderRadius={"5px"}
                onClick={handleGitHub}
                _hover={{
                  backgroundColor: isDark ? "gray.300" : "teal.200",
                  color: isDark ? "gray.900" : "teal.600",
                }}
                cursor={"pointer"}
              >
                <FaGithubSquare size={20} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
