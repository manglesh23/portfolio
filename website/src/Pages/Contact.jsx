import React from "react";
import { useState } from "react";
import Navbar from "../component/Navbar";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setError(null);
            resolve({ latitude, longitude });
          },
          (err) => {
            setError(err.message);
            reject(err.message);
          }
        );
      } else {
        const errMsg = "Geolocation is not supported by this browser.";
        setError(errMsg);
        reject(errMsg);
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       let userLocation = await getLocation();
       console.log("User Location:-",userLocation);
      //---------------------------------------------------------------------------------
      
      let sendDetails = name + "-" + email + "-" + text+"-"+String(userLocation.latitude)+"/"+String(userLocation.longitude);
      const to = "8084377799";
      console.log("Details:-", sendDetails);
      const response = await axios.post("http://localhost:7000/sms/sendsms", {
        to,
        text: sendDetails,
      });
      console.log("Response:-", response);
      if (response.data.success) {
        setStatus("Message sent successfully");
        setName("");
        setEmail("");
        setText("");
      } else {
        setStatus("Failed to send, Error!");
      }
    } catch (error) {
      setStatus("Failed to send, Error!", error.message);
    }
  };
  return (
    <div>
      <Box bg="teal.500">
        <Navbar />
        <Box bg="gray.900" color="white" h="90vh" py={10} px={6}>
          <VStack spacing={8} maxW="600px" mx="auto">
            {/* Header */}
            <VStack spacing={2} textAlign="center">
              <Heading size="2xl">Get in Touch</Heading>
              <Text fontSize="lg" color="gray.400">
                I'd love to hear from you! Fill out the form below or reach out
                to me on social media.
              </Text>
            </VStack>

            {/* Contact Form */}
            <VStack as="form" spacing={4} w="full">
              <Input
                placeholder="Your Name"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700", borderColor: "teal.500" }}
                required
              />
              <Input
                type="email"
                placeholder="Your Email Id"
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700", borderColor: "teal.500" }}
                required
              />
              <Textarea
                placeholder="Your Message"
                onChange={(e) => setText(e.target.value)}
                variant="filled"
                bg="gray.800"
                _hover={{ bg: "gray.700" }}
                _focus={{ bg: "gray.700", borderColor: "teal.500" }}
                rows={5}
                required
              />
              <Button
                colorScheme="teal"
                size="lg"
                // type="submit"
                w="full"
                onClick={handleSubmit}
              >
                Send Message
              </Button>

              {status && <Text color="green.300">{status}</Text>}
            </VStack>

            {/* Social Links */}
            <HStack spacing={6} justify="center">
              <Link
                href="https://www.linkedin.com/in/manglesh-yadav-a45184117"
                isExternal
              >
                <Icon
                  as={FaLinkedin}
                  boxSize={6}
                  _hover={{ color: "teal.400" }}
                />
              </Link>
              <Link href="https://github.com/manglesh23" isExternal>
                <Icon
                  as={FaGithub}
                  boxSize={6}
                  _hover={{ color: "teal.400" }}
                />
              </Link>
              {/* <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} _hover={{ color: "teal.400" }} />
            </Link> */}
            </HStack>
          </VStack>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
