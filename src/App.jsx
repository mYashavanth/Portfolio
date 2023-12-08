import "./App.css";
import About from "./Components/About";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext/ThemeContextProvider";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <Box
      backgroundColor={isDark ? "#9C9C9C" : "teal.50"}
      display={"flex"}
      flexDirection={"column"}
      gap={[1, 1, 2, 2]}
      // fontFamily={"robotoSlab"}
      fontFamily={"sansSerif"}
      fontSize={["16px", "16px", "18px", "18px"]}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
