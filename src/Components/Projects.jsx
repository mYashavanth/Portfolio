import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
  grid,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import thorResume from "./ProjectImg/thorResume.png";
import boAtclone from "./ProjectImg/boAtclone.png";
import movieApp from "./ProjectImg/movieApp.png";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

export default function Projects() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Box id="projects-section" pt={[8, 16, 24, 24]}>
        <Heading
          w={["90%", "90%", "80%", "80%"]}
          m={"auto"}
          p={4}
          textAlign={"center"}
          mb={[0, 0, 4, 4]}
          size={{ base: "xl", md: "2xl" }}
        >
          Projects
        </Heading>
        <Box
          w={["90%", "90%", "80%", "80%"]}
          m={"auto"}
          p={8}
          display={"grid"}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={8}
        >
          {/* Project 1 */}
          <Box
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
            }}
            backgroundColor={isDark ? "gray.200" : "white"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Image src={thorResume} borderRadius={"10px"} />
              <Heading>Thor Resume</Heading>
              <Text>
                Created a dynamic and visually appealing personal portfolio
                website for Thor, incorporating HTML and CSS to showcase his
                skills.
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
                <b>TechStack :</b>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>HTML</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>CSS</TagLabel>
                </Tag>
              </HStack>
              <Box display={"flex"} gap={4}>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  //   mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://chic-cobbler-6a4a9f.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </Button>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  //   mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://github.com/mYashavanth/Thor_Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Link
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Project 2 */}
          <Box
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
            }}
            backgroundColor={isDark ? "gray.200" : "white"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Image src={boAtclone} borderRadius={"10px"} />
              <Heading>boAt App Clone</Heading>
              <Text>
                Developed a sleek and responsive boat app clone using JavaScript
                and React, with a polished user interface created using Chakra
                UI. This project aimed to replicate the functionality and design
                of a popular boat-related application, showcasing my proficiency
                in front-end technologies.
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
                <b>TechStack :</b>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>HTML</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>CSS</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>JavaScript</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>React</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>Chakra Ui</TagLabel>
                </Tag>
              </HStack>
              <Box display={"flex"} gap={4}>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  //   mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://bo-at-project.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </Button>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  //   mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://github.com/mYashavanth/boAt_Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Link
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Project 3 */}
          <Box
            p={4}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
            }}
            backgroundColor={isDark ? "gray.200" : "white"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Image src={movieApp} borderRadius={"10px"} />
              <Heading>Movie Details App</Heading>
              <Text>
                Crafted an engaging Movie Details App using JavaScript and
                React, designed to provide comprehensive information about
                movies. The application, developed with a focus on user
                experience, integrates dynamic data fetching and a modern UI for
                an immersive movie exploration experience.
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
                <b>TechStack :</b>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>HTML</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>CSS</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>JavaScript</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>React</TagLabel>
                </Tag>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme={isDark ? "yellow" : "teal"}
                >
                  <TagLabel>Chakra Ui</TagLabel>
                </Tag>
              </HStack>
              <Box display={"flex"} gap={4}>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  // mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://movie-app-beta-eosin.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </Button>
                <Button
                  backgroundColor={isDark ? "gray.900" : "teal"}
                  color={"white"}
                  p={2}
                  borderRadius={"5px"}
                  w={"50%"}
                  // mx={"25%"}
                  _hover={{
                    backgroundColor: isDark ? "gray.300" : "teal.200",
                    color: isDark ? "gray.900" : "teal.600",
                  }}
                  letterSpacing={0.5}
                >
                  <a
                    href="https://github.com/mYashavanth/MovieApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Link
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
