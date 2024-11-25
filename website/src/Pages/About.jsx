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
} from "@chakra-ui/react";
import NPMPackage from "../component/NPMPackage";
import axios from "axios";
// import { Button } from "react-scroll";
const About = () => {
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

  // const handleClick = async () => {
  //   try {
  //     console.log("Download CV");

  //     const response = await fetch(
  //       "http://localhost:7000/download/downloadcv/Manglesh_Yadav_CV.pdf",
  //       {
  //         method: "POST",
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to download file");
  //     }

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);

  //     // Create a temporary anchor element to trigger the download
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = "Manglesh_Yadav_CV.pdf"; // Set the file name for download
  //     document.body.appendChild(link);
  //     link.click();

  //     // Clean up
  //     link.remove();
  //     window.URL.revokeObjectURL(url);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <Box bg="teal.500">
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
              {/* <Heading as="h1" size="xl" color="gray.100">
            About Me
          </Heading> */}
              {/* <Image
              borderRadius="full"
              boxSize="150px"
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              mb={4}
            /> */}
              <Text fontSize="lg" color="gray.100" textAlign="justify">
                I am an alumnus of IIT Dhanbad, one of India’s most prestigious
                institutions. With professional experience at two innovative
                start-ups, I have designed and developed scalable,
                high-performance backend systems and architected robust
                solutions to address complex challenges. My unwavering passion
                for technology drives me to continuously upskill and embrace
                emerging trends in the ever-evolving tech ecosystem. I am
                committed to leveraging my expertise in software development,
                system design, and problem-solving to deliver impactful,
                user-centric solutions that drive organizational growth and
                innovation.
              </Text>
              {/* <Text fontSize="lg" color="gray.100">
            When I'm not coding, you can find me exploring new places, reading
            books, or experimenting with new recipes in the kitchen.
          </Text> */}
              <Box>
                {/* <Heading as="h2" size="lg" mb={4}>
              My Skills
            </Heading> */}
                <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      px={4}
                      py={2}
                      bg="teal.500"
                      color="white"
                      borderRadius="md"
                      fontSize="md"
                      textAlign="center"
                    >
                      {skill}
                    </Badge>
                  ))}
                </SimpleGrid>
              </Box>

              {/* <Button colorScheme="teal" size="lg" onClick={handleClick} margin={20}>
              Download CV
            </Button> */}
            </Stack>
            <Box margin={20}>
              <SimpleGrid
                columns={{ base: 2, sm: 3, md: 4, size: "lg" }}
                spacing={4}
              >
                <NPMPackage packages={npmPackages} />
              </SimpleGrid>
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
