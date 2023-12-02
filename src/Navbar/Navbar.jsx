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
  MenuList,
  Spacer,
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

export default function Navbar() {
  const btnRef = React.useRef();
  const { isDark, setIsDark } = useContext(ThemeContext);

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
        <Box p={6} pl={8}>
          <Heading size={"md"}>Yashavantha M</Heading>
        </Box>
        <Spacer />
        <Center
          p={4}
          display={["none", "none", "flex", "flex"]}
          justifyContent={"space-evenly"}
          w={["auto", "auto", "60%", "45%"]}
          cursor={"pointer"}
        >
          <Link
            to="home-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <FaHome />
              Home
            </Box>
          </Link>
          <Link
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
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
            offset={-70}
            duration={500}
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
            offset={-70}
            duration={500}
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
            offset={-70}
            duration={500}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <MdContacts />
              Contact
            </Box>
          </Link>
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
                offset={-70}
                duration={500}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <FaHome />
                  Home
                </Box>
              </Link>
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <IoPersonOutline />
                  About
                </Box>
              </Link>
              <Link
                to="skills-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <GiSkills />
                  Skills
                </Box>
              </Link>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <GrProjects />
                  Projects
                </Box>
              </Link>

              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <MdContacts />
                  Contact
                </Box>
              </Link>
            </MenuList>
          </Menu>
        </Center>

        {/* <Center>
          <Button
            ref={btnRef}
            backgroundColor={isDark ? "gray.900" : "teal"}
            color={"white"}
            onClick={onOpen}
            display={["flex", "flex", "none", "none"]}
            m={4}
            _hover={{
              backgroundColor: isDark ? "black" : "teal.500",
            }}
          >
            <HamburgerIcon />
          </Button>
        </Center> */}

        {/* <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              backgroundColor={isDark ? "gray.500" : "teal.400"}
              color={"white"}
              cursor={"pointer"}
              textAlign={"center"}
            >
              <Link
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
              >
                About
              </Link>
              <Link
                to="skills-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
              >
                Skills
              </Link>
              <Link
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
              >
                Projects
              </Link>

              <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
              >
                Contact
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer> */}
      </Flex>
    </>
  );
}
