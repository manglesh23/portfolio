// import React from 'react'
import Navbar from "../component/Navbar";
import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Link,
  Stack,
} from "@chakra-ui/react";
import coding from "../assets/coding.jpg";
import myIndia from "../assets/myIndia.jpeg";
import website from "../assets/website.png";
import chatbot from "../assets/chatbot.png";
import payment from "../assets/payment.jpg";

const projects = [
  {
    id: 1,
    title: "Sahayak Drvya Fintech Foundation",
    description:
      "Fintech Project, Database Schema For User, Center, Group, Member, User Authorization, Data Flow, Product, Loan Mapping, Center Creation, Member & Group Creation",
    image: coding,
    github: "https://github.com/manglesh23/SahayakDravya",
    liveDemo: "https://project-one-demo.com",
  },
  {
    id: 2,
    title: "Chat Application",
    description: "Real Time Chat Application",
    image: myIndia,
    github: "https://github.com/manglesh23/chatapplication",
    liveDemo: "https://project-two-demo.com",
  },
  {
    id: 3,
    title: "Payment System",
    description: "Payment System integration Assignment, nock npm used",
    image: payment,
    github: "https://github.com/manglesh23/myIndia",
    liveDemo: "https://project-two-demo.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Portfolio Website",
    image: website,
    github: "https://github.com/manglesh23/portfolio.git",
    liveDemo: "https://project-two-demo.com",
  },
  {
    id: 5,
    title: "Chat Bot",
    description: "Static Chat Bot, In Developing Phase",
    image: chatbot,
    github: "",
    liveDemo: "https://project-two-demo.com",
  },
 
];

const Projects = () => {
  return (
    <div>
      <Box bg="teal.500">
        <Navbar />
        <Box p={4} bg="gray.900" minHeight="90vh">
          {/* <Heading textAlign="center" mb={8}>
            My Projects
          </Heading> */}
          <SimpleGrid columns={{ base: 1, md: 1, lg: 4 }} spacing={4}>
            {projects.map((project) => (
              <Box
                key={project.id}
                bg="white"
                boxShadow="sm"
                borderRadius="md"
                overflow="hidden"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
                maxWidth="300px" // Reduces the width of the card
                height="380px" // Sets a fixed height
                mx="auto" // Ce
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  height="200px" // Restricts the height
                  // width="100%"
                  width="300px"
                />
                <Box p={4} flex="1">
                  <Heading size="sm" mb={2}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4} noOfLines={3}>
                    {project.description}
                  </Text>
                  <Stack direction="row" spacing={4}>
                    <Link href={project.github} isExternal>
                      <Button
                        colorScheme="teal"
                        size="sm"
                        position="absolute" // Position the button
                        bottom="4px" // Space from the bottom
                        left="4px" // Space from the left
                      >
                        GitHub
                      </Button>
                    </Link>
                    {/* <Link href={project.liveDemo} isExternal>
                    <Button colorScheme="blue" size="sm">
                      Live Demo
                    </Button>
                  </Link> */}
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
