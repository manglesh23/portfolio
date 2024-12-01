import React from "react";
import Navbar from "../component/Navbar";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Badge,
  Flex,
  Link,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NPMPackage from "../component/NPMPackage";
// import axios from "axios";
// import { Button } from "react-scroll";
const About = () => {
  const MotionBox = motion(Box);
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "Chakra UI",
    "HTML & CSS",
    "Git & GitHub",
    "REST APIs",
  ];

  const npmPackages = [
    {
      name: "multer",
      // description: "A powerful utility for enhancing your workflow.",
      link: "https://www.npmjs.com/package/multer",
    },
    {
      name: "multer-s3",
      // description: "A lightweight tool for managing your tasks.",
      link: "https://www.npmjs.com/package/multer-s3",
    },
    {
      name: "nodemailer",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/nodemailer",
    },
    {
      name: "zod",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/zod",
    },
    {
      name: "axios",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/axios",
    },
    {
      name: "aws-sdk",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/aws-sdk",
    },
    {
      name: "mongodb",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/mongodb",
    },
    {
      name: "mongoose",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/mongoose",
    },
    {
      name: "express",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/express",
    },
    {
      name: "dotenv",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/dotenv",
    },
    {
      name: "jsonwebtoken",
      // description: "A feature-rich library for handling data.",
      link: "https://www.npmjs.com/package/jsonwebtoken",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div>
      <Box
        bg="teal.500"
        bgGradient="linear(to-br, teal.500, gray.900)"
        minHeight="100vh"
      >
        <Navbar />
        <Flex
          bg="gray.900"
          minHeight="90vh"
          p={8}
          gap={6}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box bg="gray.900" minHeight="90vh" py={8} px={4} flex="3">
            <Stack
              maxW="800px"
              mx="auto"
              spacing={8}
              align="center"
              textAlign="center"
            >
              <MotionBox
                bg="gray.800"
                p={8}
                rounded="md"
                shadow="lg"
                textAlign="center"
                maxW="800px"
                mx="auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <Text fontSize="lg" color="gray.100" textAlign="justify">
                  I am an alumnus of IIT Dhanbad, one of India’s most
                  prestigious institutions. With professional experience at two
                  innovative start-ups, I have designed and developed scalable,
                  high-performance backend systems and architected robust
                  solutions to address complex challenges. My unwavering passion
                  for technology drives me to continuously upskill and embrace
                  emerging trends in the ever-evolving tech ecosystem. I am
                  committed to leveraging my expertise in software development,
                  system design, and problem-solving to deliver impactful,
                  user-centric solutions that drive organizational growth and
                  innovation.
                </Text>
              </MotionBox>
              {/* <Text fontSize="lg" color="gray.100">
            When I'm not coding, you can find me exploring new places, reading
            books, or experimenting with new recipes in the kitchen.
          </Text> */}
              <Box>
                <MotionBox
                  textAlign="center"
                  w="100%"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={6}>
                    {skills.map((skill, index) => (
                      <Tooltip label={`Skill: ${skill}`} key={index}>
                        <Badge
                          px={4}
                          py={2}
                          bg="teal.600"
                          color="white"
                          borderRadius="md"
                          fontSize="md"
                          textAlign="center"
                          _hover={{ bg: "teal.400", transform: "scale(1.1)" }}
                          transition="all 0.2s ease-in-out"
                        >
                          {skill}
                        </Badge>
                      </Tooltip>
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </Box>
            </Stack>
            <Box margin={20}>
              <MotionBox
                textAlign="center"
                w="100%"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={1.5}
              >
                <SimpleGrid
                  columns={{ base: 2, sm: 3, md: 4, size: "lg" }}
                  spacing={4}
                >
                  <NPMPackage packages={npmPackages} />
                </SimpleGrid>
              </MotionBox>
            </Box>
          </Box>
          {/* <Box flex="1" p={4} ml={3} bg="gray.900">
          <NPMPackage packages={npmPackages} />
        </Box> */}
        </Flex>
      </Box>
    </div>
  );
};

export default About;
