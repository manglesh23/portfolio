import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import coding from "../assets/coding.jpg";
import ChatBot from "../chatbot/chatbot";

function Homepage() {
  const navigate = useNavigate();
  console.log("coding:-", coding);
  const MotionBox = motion(Box);
  const handleClick = async () => {
    try {
      console.log("Download CV");

      const response = await fetch(
        "http://localhost:7000/download/downloadcv/Manglesh_Yadav_CV.pdf",
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      
      const link = document.createElement("a");
      link.href = url;
      link.download = "Manglesh_Yadav_CV.pdf"; 
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.remove();
      window.URL.revokeObjectURL(url);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };
  
  const containerVariantsY = {
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
        // bgImage={`url(${coding})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Navbar />
        <ChatBot />

        <Box
          // bgImage="url('https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg')"
          // bgImage= {`url(${coding})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          color="white"
          bg="gray.900"
          // backgroundColor="#001f3f"

          minH="90vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          // overflow="hidden"
          px={8}
        >
          {/* <Navbar /> */}

          <VStack spacing={6} textAlign="center">
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
              custom={0.3}
            >
              <Heading size="3xl" fontWeight="bold">
                Hi, I'm Manglesh Yadav
              </Heading>
              <Text fontSize="xl" maxW="600px">
                I build scalable web applications and craft intuitive user
                experiences.
              </Text>
            </MotionBox>

            <MotionBox
              bg="gray.800"
              p={8}
              rounded="md"
              shadow="lg"
              textAlign="center"
              maxW="800px"
              mx="auto"
              variants={containerVariantsY}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
            <HStack spacing={4}>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                colorScheme="teal"
                color="white"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </Button>
              <Button colorScheme="teal" size="lg" onClick={handleClick}>
                Download CV
              </Button>
            </HStack>
            </MotionBox>
          </VStack>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
