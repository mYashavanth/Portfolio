import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import html from "./SkillsImg/html.png";
import css from "./SkillsImg/css.png";
import js from "./SkillsImg/javaScript.png";
import reactJs from "./SkillsImg/reactJs.png";
import nodeJs from "./SkillsImg/nodeJs.png";
import chakraUi from "./SkillsImg/chakraUi.png";
import gitHub from "./SkillsImg/gitHub.png";
import style from "./Skills.module.css";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

export default function Skills() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Box
        id="skills-section"
        w={["90%", "90%", "80%", "80%"]}
        m={"auto"}
        p={8}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        border={"1px"}
        pt={[8, 16, 24, 24]}
      >
        <Heading textAlign={"center"} mb={4} size={{ base: "xl", md: "2xl" }}>
          Skills
        </Heading>
        <Box
          display={"grid"}
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gridRowGap={[8, 8, 16, 16]}
          gap={8}
          p={4}
        >
          <Image
            className={style.img}
            src={html}
            alt="html"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />

          <Image
            className={style.img}
            src={css}
            alt="css"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
          <Image
            className={style.img}
            src={js}
            alt="js"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
          <Image
            className={style.img}
            src={reactJs}
            alt="reactJs"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
          <Image
            className={style.img}
            src={nodeJs}
            alt="nodeJs"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
          <Image
            className={style.img}
            src={chakraUi}
            alt="chakraUi"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
          <Image
            className={style.img}
            src={gitHub}
            alt="gitHub"
            w={["100%", "95%", "85%", "75%"]}
            borderRadius={"15%"}
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            backgroundColor={isDark ? "gray.200" : "white"}
          />
        </Box>
      </Box>
    </>
  );
}
