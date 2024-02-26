import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <>
      <Box
        id="about-section"
        w={["90%", "90%", "80%", "80%"]}
        m={"auto"}
        p={8}
        display={"flex"}
        flexDirection={"column"}
        gap={8}
        pt={[8, 16, 24, 24]}
      >
        <Heading textAlign={"center"} mb={4} size={{ base: "xl", md: "2xl" }}>
          About Me
        </Heading>
        <Text>
          👋 Hello there! I'm a dedicated professional with a solid foundation
          in Electronics and Communication Engineering, having graduated from
          PES University. Transitioning into the dynamic realm of Full Stack Web
          Development has been an exhilarating journey for me.
        </Text>
        {/* <Text>
          🎓 <b>Education:</b> Completed Electronics and Communication
          Engineering at Pes University.
        </Text> */}
        <Text>
          🚀 <b>Current Focus:</b> I've successfully mastered the MERN stack,
          showcasing proficiency in HTML, CSS, JavaScript, and React to craft
          immersive web solutions.
        </Text>
        <Text>
          🌐 <b>Tech Enthusiast:</b> I'm deeply passionate about harnessing
          technology to architect seamless and captivating online experiences,
          driven by a commitment to innovation.
        </Text>
        <Text>
          🔍 <b>Next Steps:</b> Excitedly, I'm gearing up to delve into Python,
          expanding my skill set to encompass its versatile applications in web
          development and beyond.
        </Text>
        <Text>
          Let's connect and delve into the endless possibilities at the nexus of
          technology and creativity!
        </Text>
      </Box>
    </>
  );
}
