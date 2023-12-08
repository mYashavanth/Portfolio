import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ThemeContext } from "../ThemeContext/ThemeContextProvider";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import Yashavantha_M_Resume from "../Components/Yashavanth.pdf";
import { LiaFileDownloadSolid } from "react-icons/lia";

export default function Navbar() {
  const btnRef = React.useRef();
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1o3-P0QLLzMgs6QWYZngc0gHUbNCu2x1H/view?usp=sharing",
      "_blank"
    );
  };

  console.log(isDark);
  return (
    <>
      <Flex
        position={"sticky"}
        top={1}
        width={"100%"}
        zIndex={999}
        backgroundColor={isDark ? "gray.900" : "teal"}
        color={isDark ? "gray.300" : "white"}
        justifyContent={"space-between"}
        w={["99%", "99%", "98%", "98%"]}
        m={"auto"}
        borderRadius={"10px"}
      >
        <Center pl={{ base: 4, md: 8, lg: 10, xl: 12 }}>
          <Heading size={{ base: "md", md: "md", lg: "lg", xl: "xl" }}>
            Yashavantha M
          </Heading>
        </Center>
        <Spacer />
        <Center
          p={4}
          display={["none", "none", "flex", "flex"]}
          justifyContent={"space-evenly"}
          w={["auto", "auto", "62%", "55%"]}
          fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
        >
          <Link
            to="home-section"
            spy={true}
            smooth={true}
            offset={-83}
            duration={500}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDark ? "gold" : "blue",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <FaHome />
              Home
            </Box>
          </Link>
          <Link
            to="about-section"
            spy={true}
            smooth={true}
            offset={-82}
            duration={500}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDark ? "gold" : "blue",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <IoPersonOutline />
              About
            </Box>
          </Link>
          <Link
            to="skills-section"
            spy={true}
            smooth={true}
            offset={-83}
            duration={600}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDark ? "gold" : "blue",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <GiSkills />
              Skills
            </Box>
          </Link>
          <Link
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-82}
            duration={600}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDark ? "gold" : "blue",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <GrProjects />
              Projects
            </Box>
          </Link>

          <Link
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-83}
            duration={800}
            style={{ cursor: "pointer" }}
            activeStyle={{
              color: isDark ? "gold" : "blue",
              textDecoration: "underline",
              position: "relative",
              bottom: "5px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <MdContacts />
              Contact
            </Box>
          </Link>
          <Center
            display={"flex"}
            gap={1}
            _hover={{
              backgroundColor: isDark ? "gray.300" : "teal.200",
              color: isDark ? "gray.900" : "teal.600",
              position: "relative",
              bottom: "2px",
              borderRadius: "5px",
              color: "black",
              textDecoration: "underline",
            }}
          >
            <LiaFileDownloadSolid size={20} />
            <Text
              as={"a"}
              href={Yashavantha_M_Resume}
              download="Yashavantha_M_Resume"
              // backgroundColor={isDark ? "gray.900" : "teal"}
              // color={"white"}
              borderRadius={"5px"}
              // _hover={{
              //   backgroundColor: isDark ? "gray.300" : "teal.200",
              //   color: isDark ? "gray.900" : "teal.600",
              // }}
              p={1}
              letterSpacing={0.5}
              onClick={handleResume}
            >
              Resume
            </Text>
          </Center>
        </Center>

        <Center>
          <Button
            ref={btnRef}
            backgroundColor={isDark ? "gray.900" : "teal"}
            color={"white"}
            onClick={() => setIsDark(!isDark)}
            m={4}
            _hover={{
              backgroundColor: isDark ? "black" : "teal.500",
            }}
            borderRadius={"50%"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Center>

        <Center>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              // variant="outline"
              ref={btnRef}
              backgroundColor={isDark ? "gray.900" : "teal"}
              color={"white"}
              display={["flex", "flex", "none", "none"]}
              m={4}
              _hover={{
                backgroundColor: isDark ? "black" : "teal.500",
              }}
            />
            <MenuList
              backgroundColor={isDark ? "gray.500" : "teal.400"}
              display={["flex", "flex", "none", "none"]}
              color={"white"}
              flexDirection={"column"}
              p={4}
              gap={3}
            >
              <Link
                to="home-section"
                spy={true}
                smooth={true}
                offset={-83}
                duration={1000}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <FaHome />
                    Home
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-83}
                duration={1000}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <IoPersonOutline size={19} />
                    About
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="skills-section"
                spy={true}
                smooth={true}
                offset={-83}
                duration={1000}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <GiSkills size={19} />
                    Skills
                  </Box>
                </MenuItem>
              </Link>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-83}
                duration={1000}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <GrProjects size={17} />
                    Projects
                  </Box>
                </MenuItem>
              </Link>

              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-83}
                duration={1000}
              >
                <MenuItem backgroundColor={"transparent"}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <MdContacts size={18} />
                    Contact
                  </Box>
                </MenuItem>
              </Link>
              <MenuItem backgroundColor={"transparent"} cursor={"unset"}>
                <Box display={"flex"} alignItems={"center"} gap={0.2}>
                  <LiaFileDownloadSolid size={20} />
                  <Text
                    as={"a"}
                    href={Yashavantha_M_Resume}
                    download="Yashavantha_M_Resume"
                    color={"white"}
                    p={2}
                    letterSpacing={0.5}
                    onClick={handleResume}
                    cursor={"pointer"}
                  >
                    Resume
                  </Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Center>
      </Flex>
    </>
  );
}
