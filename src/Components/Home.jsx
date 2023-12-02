import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";
import Typed from "typed.js";
import img from "./Yash.jpg";
import img1 from "./Yash1.jpg";
import Yashavantha_M_Resume from "./Yashavanth.pdf";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const el = useRef(null);
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Aspiring Developer.",
        "Aspiring Web Developer.",
        "Aspiring Programmer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loopCount: Infinity,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleLinkedIN = () => {
    window.open(
      "https://www.linkedin.com/in/yashavantha-m-299a17209/",
      "_blank"
    );
  };
  const handleGitHub = () => {
    window.open("https://github.com/mYashavanth", "_blank");
  };
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1o3-P0QLLzMgs6QWYZngc0gHUbNCu2x1H/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <Box
        w={["90%", "90%", "80%", "80%"]}
        m={"auto"}
        id="home-section"
        display={"flex"}
        flexDirection={["column", "column", "row", "row"]}
        gap={8}
        justifyContent={"space-around"}
        alignItems={"center"}
        p={8}
      >
        <Box w={["100%", "100%", "50%", "50%"]} p={4}>
          <Heading>Hello I Am Yashavantha M</Heading>
          <Text
            as="span"
            margin={{
              base: " 1rem 0",
              md: " 2rem 0",
              lg: " 3rem 0",
              xl: " 4rem 0",
            }}
            color={isDark ? "gray.200" : "teal"}
            fontSize={["1.5rem", "1.5rem", "2rem", "2rem"]}
            ref={el}
          ></Text>
          <Text mb={["1rem", "1rem", "2rem", "2rem"]}>
            Electronic & Communication Engineer | Aspiring Full-Stack Web
            Developer
          </Text>
          <Text
            as={"a"}
            href={Yashavantha_M_Resume}
            download="Yashavantha_M_Resume"
            backgroundColor={isDark ? "gray.900" : "teal"}
            color={"white"}
            p={2}
            borderRadius={"5px"}
            _hover={{
              backgroundColor: isDark ? "gray.300" : "teal.200",
              color: isDark ? "gray.900" : "teal.600",
            }}
            letterSpacing={0.5}
            onClick={handleResume}
          >
            Resume
          </Text>
          <Box display={"flex"} mt={["1rem", "1rem", "2rem", "2rem"]} gap={4}>
            <Box
              borderRadius={"5px"}
              onClick={handleLinkedIN}
              _hover={{
                backgroundColor: isDark ? "gray.300" : "teal.200",
                color: isDark ? "gray.900" : "teal.600",
              }}
            >
              <FaLinkedinIn size={40} />
            </Box>
            <Box
              borderRadius={"5px"}
              onClick={handleGitHub}
              _hover={{
                backgroundColor: isDark ? "gray.300" : "teal.200",
                color: isDark ? "gray.900" : "teal.600",
              }}
            >
              <FaGithubSquare size={40} />
            </Box>
          </Box>
        </Box>
        <Box w={["100%", "100%", "50%", "50%"]} p={4}>
          {isDark ? (
            <Image
              src={img1}
              w={{ base: "65%", md: "60%", lg: "60%", xl: "60%" }}
              borderRadius={"50%"}
              m={"auto"}
              boxShadow={
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              }
            />
          ) : (
            <Image
              src={img}
              w={{ base: "65%", md: "60%", lg: "60%", xl: "60%" }}
              borderRadius={"50%"}
              m={"auto"}
              boxShadow={
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              }
            />
          )}
        </Box>
      </Box>
    </>
  );
}
