import { Box, Button, Heading, Image, Text, grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import thorResume from "./ProjectImg/thorResume.png";
import boAtclone from "./ProjectImg/boAtclone.png";
import movieApp from "./ProjectImg/movieApp.png";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

export default function Projects() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Box id="projects-section">
        <Heading w={["90%", "90%", "80%", "80%"]} m={"auto"} p={4}>
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
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
              cursor: "pointer",
            }}
          >
            <Box>
              <Image src={thorResume} borderRadius={"10px"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Heading>Thor Resume</Heading>
              <Text>
                Created a dynamic and visually appealing personal portfolio
                website for Thor, incorporating HTML and CSS to showcase his
                skills.
              </Text>
              <Text>
                <b>Skills</b> : HTML, CSS
              </Text>
              <Box display={"flex"}>
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
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
              cursor: "pointer",
            }}
          >
            <Box>
              <Image src={boAtclone} borderRadius={"10px"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Heading>boAt App Clone</Heading>
              <Text>
                Developed a sleek and responsive boat app clone using JavaScript
                and React, with a polished user interface created using Chakra
                UI. This project aimed to replicate the functionality and design
                of a popular boat-related application, showcasing my proficiency
                in front-end technologies.
              </Text>
              <Text>
                <b>Skills</b> : HTML, CSS, javaScript, React, Chakra Ui
              </Text>
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
                    Git Link
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
            gap={4}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
              transition: "all 0.5s ease",
              cursor: "pointer",
            }}
          >
            <Box>
              <Image src={movieApp} borderRadius={"10px"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={4}>
              <Heading>Movie Details App</Heading>
              <Text>
                Crafted an engaging Movie Details App using JavaScript and
                React, designed to provide comprehensive information about
                movies. The application, developed with a focus on user
                experience, integrates dynamic data fetching and a modern UI for
                an immersive movie exploration experience.
              </Text>
              <Text>
                <b>Skills</b> : HTML, CSS, javaScript, React, Chakra Ui
              </Text>
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
                    Git Link
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
