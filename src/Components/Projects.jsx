import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import thorResume from "./ProjectImg/thorResume.png";
import boAtclone from "./ProjectImg/boAtclone.png";
import movieApp from "./ProjectImg/movieApp.png";
import Togglehead from "./ProjectImg/Togglehead.png";
import Styledotme from "./ProjectImg/Styledotme.png";

const projectsData = [
  {
    id: 5,
    name: "Weather Forecast Application",
    image: Styledotme,
    description:
      "This single-page weather forecast application provides users with real-time weather details and a 5-day forecast for a selected city. The application is designed to be user-friendly, responsive, and includes additional features for enhanced user experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://styledotme.vercel.app/",
    githubLink: "https://github.com/mYashavanth/Styledotme",
  },
  {
    id: 4,
    name: "Togglehead",
    image: Togglehead,
    description:
      "This project showcases a responsive webpage with various sections using Swiper.js to implement carousel functionality, including a top carousel section with navigation dots and autoplay, a card slider supporting mouse and touch gestures, a statistics section with counting animations, and an FAQ section with expandable answers.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
    liveLink: "https://togglehead-alpha.vercel.app/",
    githubLink: "https://github.com/mYashavanth/Togglehead",
  },
  {
    id: 3,
    name: "Movie Details App",
    image: movieApp,
    description:
      "Crafted an engaging Movie Details App using JavaScript and React, designed to provide comprehensive information about movies. The application, developed with a focus on user experience, integrates dynamic data fetching and a modern UI for an immersive movie exploration experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
    liveLink: "https://movie-app-beta-eosin.vercel.app/",
    githubLink: "https://github.com/mYashavanth/MovieApp",
  },
  {
    id: 2,
    name: "boAt App Clone",
    image: boAtclone,
    description:
      "Developed a sleek and responsive boat app clone using JavaScript and React, with a polished user interface created using Chakra UI. This project aimed to replicate the functionality and design of a popular boat-related application, showcasing my proficiency in front-end technologies.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
    liveLink: "https://bo-at-project.vercel.app/",
    githubLink: "https://github.com/mYashavanth/boAt_Project",
  },
  {
    id: 1,
    name: "Thor Resume",
    image: thorResume,
    description:
      "Created a dynamic and visually appealing personal portfolio website for Thor, incorporating HTML and CSS to showcase his skills.",
    techStack: ["HTML", "CSS"],
    liveLink: "https://chic-cobbler-6a4a9f.netlify.app/",
    githubLink: "https://github.com/mYashavanth/Thor_Resume",
  },
];

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
          {projectsData.map((project) => (
            <Box
              key={project.id}
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
                <Image src={project.image} borderRadius={"10px"} />
                <Heading>{project.name}</Heading>
                <Text>{project.description}</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={4}>
                <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
                  <b>TechStack :</b>
                  {project.techStack.map((tech) => (
                    <Tag
                      key={tech}
                      size="md"
                      variant="subtle"
                      colorScheme={isDark ? "yellow" : "teal"}
                    >
                      <TagLabel>{tech}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
                <Box display={"flex"} gap={4}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: "50%" }}
                  >
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
                    >
                      View Project
                    </Button>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: "50%" }}
                  >
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
                    >
                      GitHub Link
                    </Button>
                  </a>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

// import {
//   Box,
//   Button,
//   HStack,
//   Heading,
//   Image,
//   Tag,
//   TagLabel,
//   Text,
//   grid,
// } from "@chakra-ui/react";
// import React, { useContext } from "react";
// import thorResume from "./ProjectImg/thorResume.png";
// import boAtclone from "./ProjectImg/boAtclone.png";
// import movieApp from "./ProjectImg/movieApp.png";
// import Togglehead from "./ProjectImg/Togglehead.png";
// import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

// export default function Projects() {
//   const { isDark } = useContext(ThemeContext);
//   return (
//     <>
//       <Box id="projects-section" pt={[8, 16, 24, 24]}>
//         <Heading
//           w={["90%", "90%", "80%", "80%"]}
//           m={"auto"}
//           p={4}
//           textAlign={"center"}
//           mb={[0, 0, 4, 4]}
//           size={{ base: "xl", md: "2xl" }}
//         >
//           Projects
//         </Heading>
//         <Box
//           w={["90%", "90%", "80%", "80%"]}
//           m={"auto"}
//           p={8}
//           display={"grid"}
//           gridTemplateColumns={[
//             "repeat(1, 1fr)",
//             "repeat(1, 1fr)",
//             "repeat(2, 1fr)",
//             "repeat(2, 1fr)",
//           ]}
//           gap={8}
//         >
//           {/* Project 1 */}
//           <Box
//             p={4}
//             boxShadow={
//               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//             }
//             borderRadius={"10px"}
//             display={"flex"}
//             flexDirection={"column"}
//             justifyContent={"space-between"}
//             gap={4}
//             _hover={{
//               boxShadow: "2xl",
//               transform: "scale(1.02)",
//               transition: "all 0.5s ease",
//             }}
//             backgroundColor={isDark ? "gray.200" : "white"}
//           >
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <Image src={thorResume} borderRadius={"10px"} />
//               <Heading>Thor Resume</Heading>
//               <Text>
//                 Created a dynamic and visually appealing personal portfolio
//                 website for Thor, incorporating HTML and CSS to showcase his
//                 skills.
//               </Text>
//             </Box>
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
//                 <b>TechStack :</b>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>HTML</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>CSS</TagLabel>
//                 </Tag>
//               </HStack>
//               <Box display={"flex"} gap={4}>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   //   mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://chic-cobbler-6a4a9f.netlify.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Project
//                   </a>
//                 </Button>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   //   mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://github.com/mYashavanth/Thor_Resume"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     GitHub Link
//                   </a>
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           {/* Project 2 */}
//           <Box
//             p={4}
//             boxShadow={
//               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//             }
//             borderRadius={"10px"}
//             display={"flex"}
//             flexDirection={"column"}
//             justifyContent={"space-between"}
//             gap={4}
//             _hover={{
//               boxShadow: "2xl",
//               transform: "scale(1.02)",
//               transition: "all 0.5s ease",
//             }}
//             backgroundColor={isDark ? "gray.200" : "white"}
//           >
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <Image src={boAtclone} borderRadius={"10px"} />
//               <Heading>boAt App Clone</Heading>
//               <Text>
//                 Developed a sleek and responsive boat app clone using JavaScript
//                 and React, with a polished user interface created using Chakra
//                 UI. This project aimed to replicate the functionality and design
//                 of a popular boat-related application, showcasing my proficiency
//                 in front-end technologies.
//               </Text>
//             </Box>
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
//                 <b>TechStack :</b>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>HTML</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>CSS</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>JavaScript</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>React</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>Chakra Ui</TagLabel>
//                 </Tag>
//               </HStack>
//               <Box display={"flex"} gap={4}>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   //   mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://bo-at-project.vercel.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Project
//                   </a>
//                 </Button>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   //   mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://github.com/mYashavanth/boAt_Project"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     GitHub Link
//                   </a>
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           {/* Project 3 */}
//           <Box
//             p={4}
//             boxShadow={
//               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//             }
//             borderRadius={"10px"}
//             display={"flex"}
//             flexDirection={"column"}
//             justifyContent={"space-between"}
//             gap={4}
//             _hover={{
//               boxShadow: "2xl",
//               transform: "scale(1.02)",
//               transition: "all 0.5s ease",
//             }}
//             backgroundColor={isDark ? "gray.200" : "white"}
//           >
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <Image src={movieApp} borderRadius={"10px"} />
//               <Heading>Movie Details App</Heading>
//               <Text>
//                 Crafted an engaging Movie Details App using JavaScript and
//                 React, designed to provide comprehensive information about
//                 movies. The application, developed with a focus on user
//                 experience, integrates dynamic data fetching and a modern UI for
//                 an immersive movie exploration experience.
//               </Text>
//             </Box>
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
//                 <b>TechStack :</b>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>HTML</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>CSS</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>JavaScript</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>React</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>Chakra Ui</TagLabel>
//                 </Tag>
//               </HStack>
//               <Box display={"flex"} gap={4}>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   // mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://movie-app-beta-eosin.vercel.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Project
//                   </a>
//                 </Button>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   // mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://github.com/mYashavanth/MovieApp"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     GitHub Link
//                   </a>
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           {/* Project 4 */}

//           <Box
//             p={4}
//             boxShadow={
//               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//             }
//             borderRadius={"10px"}
//             display={"flex"}
//             flexDirection={"column"}
//             justifyContent={"space-between"}
//             gap={4}
//             _hover={{
//               boxShadow: "2xl",
//               transform: "scale(1.02)",
//               transition: "all 0.5s ease",
//             }}
//             backgroundColor={isDark ? "gray.200" : "white"}
//           >
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <Image src={Togglehead} borderRadius={"10px"} />
//               <Heading>Togglehead</Heading>
//               <Text>
//                 This project showcases a responsive webpage with various
//                 sections using Swiper.js to implement carousel functionality,
//                 including a top carousel section with navigation dots and
//                 autoplay, a card slider supporting mouse and touch gestures, a
//                 statistics section with counting animations, and an FAQ section
//                 with expandable answers.
//               </Text>
//             </Box>
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//               <HStack display={"flex"} flexWrap={"wrap"} spacing={3}>
//                 <b>TechStack :</b>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>HTML</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>CSS</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>JavaScript</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>React</TagLabel>
//                 </Tag>
//                 <Tag
//                   size="md"
//                   variant="subtle"
//                   colorScheme={isDark ? "yellow" : "teal"}
//                 >
//                   <TagLabel>Chakra Ui</TagLabel>
//                 </Tag>
//               </HStack>
//               <Box display={"flex"} gap={4}>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   // mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://togglehead-alpha.vercel.app/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Project
//                   </a>
//                 </Button>
//                 <Button
//                   backgroundColor={isDark ? "gray.900" : "teal"}
//                   color={"white"}
//                   p={2}
//                   borderRadius={"5px"}
//                   w={"50%"}
//                   // mx={"25%"}
//                   _hover={{
//                     backgroundColor: isDark ? "gray.300" : "teal.200",
//                     color: isDark ? "gray.900" : "teal.600",
//                   }}
//                   letterSpacing={0.5}
//                 >
//                   <a
//                     href="https://github.com/mYashavanth/Togglehead"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     GitHub Link
//                   </a>
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }
