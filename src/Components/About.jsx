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
      >
        <Heading>About Me</Heading>
        <Text>
          👋 Greetings! I'm a dedicated professional with a background in
          Electronics and Communication Engineering from PES University.
          Currently, I'm on an exciting journey into the world of Full Stack Web
          Development, specializing in the MERN stack.
        </Text>
        {/* <Text>
          🎓 <b>Education:</b> Completed Electronics and Communication
          Engineering at Pes University.
        </Text> */}
        <Text>
          🚀 <b>Current Focus:</b> Actively pursuing Full Stack Web Development
          with expertise in HTML, CSS, JavaScript, and React.
        </Text>
        <Text>
          🌐 <b>Tech Enthusiast:</b> Passionate about leveraging technology to
          create seamless and engaging web experiences.
        </Text>
        <Text>
          🔍 <b>Next Steps:</b> Eager to further enhance my skills in Node.js,
          Express.js, and MongoDB to complete the MERN stack.
        </Text>
        <Text>
          Let's connect and explore the exciting possibilities at the
          intersection of technology and innovation!
        </Text>
      </Box>
    </>
  );
}
