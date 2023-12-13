import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";

export default function Statistics() {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <Box id="statistics-section" pt={[8, 16, 24, 24]}>
        <Heading textAlign={"center"} mb={16} size={{ base: "xl", md: "2xl" }}>
          GitHub Statistics
        </Heading>
        <Box display={"flex"} flexDirection={"column"} gap={8}>
          <Image
            src="https://ghchart.rshah.org/mYashavanth"
            alt="gitStats"
            backgroundColor="gray.300"
            p={2}
            borderRadius={"10px"}
            w={["87%", "87%", "79%", "78%"]}
            m={"auto"}
          />
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={4}
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=mYashavanth&theme=shades-of-purple&hide_border=false&include_all_commits=true&count_private=true"
              alt="top-languages"
              w={"40%"}
            />
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mYashavanth&theme=shades-of-purple&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
              alt="chandan"
              w={"37.5%"}
            />
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=mYashavanth&theme=shades-of-purple&hide_border=false"
              alt="stat-card"
              w={"40%"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
