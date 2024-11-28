import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPaperPlane, FaSun, FaMoon } from "react-icons/fa";

const ChatBot = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const buttonColor = useColorModeValue("teal.900", "blue.100");

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi I'm Gola, How can I help you" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const playBeep = () => {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
  };

  const chatContainerRef = useRef(null);

  const intents = {
    "hello": "Hi there! 😊 How can I assist you?",
    "hi": "Hi there! 😊 How can I assist you?",
    "help": "Sure! Let me know what you need help with.",
    "what is your name": "My name is GOLA AI",
    "what is your anem": "My name is GOLA AI",
    "how are you": "I'm good, what about you",
    "how are you!": "I'm good, what about you",
    "how are you doing": "I'm good, what about you",
    "tell me about yourself":
      "I'm in developing phase, You wanna know about my creater?",
    yes: "He is from IIT Dhanbad, have worked for two start-ups, love to learn new tech like currently working on NLP to make me better",
    "yes, sure":
      "He is from IIT Dhanbad, have worked for two start-ups, love to learn new tech like currently working on NLP to make me better",
    "go ahead":
      "He is from IIT Dhanbad, have worked for two start-ups, love to learn new tech like currently working on NLP to make me better",
    "download cv": "krta hu download.....",
    "tell me about ashwani":"Kuch bolunga to vivad ho jayega",
    "sach bolne se darr rhe ho?":"Rao Sahab GOLA kisi se nahi darta"
  };

  async function callfunction(text) {
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

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "Manglesh_Yadav_CV.pdf"; // Set the file name for download
      document.body.appendChild(link);
      link.click();

      // Clean up
      link.remove();
      window.URL.revokeObjectURL(url);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // Open chatbot after 2 seconds with a beep sound
    const timer = setTimeout(() => {
      setIsChatOpen(true);
      playBeep();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // if (chatContainerRef.current) {
    //   chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    // }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.toLowerCase().trim();

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);

    if (userMessage === "download cv") {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: intents[userInput] },
      ]);
      setTimeout(() => {
        callfunction("Downloading...");
      }, 500);
    } else {
      let botResponse =
        intents[userMessage] || "I'm not sure how to respond to that.";

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      }, 100);
    }
    setUserInput("");
  };

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      zIndex="1000"
      w={isChatOpen ? "350px" : "60px"}
      h={isChatOpen ? "450px" : "60px"}
      borderRadius="md"
      boxShadow="lg"
      bg={bgColor}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      transition="all 0.3s ease"
    >
      {/* Header */}
      <HStack
        p="2"
        bg={buttonColor}
        color="white"
        justify="space-between"
        align="center"
        cursor="pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          display={isChatOpen ? "block" : "none"}
        >
          GOLA AI
        </Text>
        <IconButton
          size="sm"
          icon={useColorModeValue(<FaMoon />, <FaSun />)}
          onClick={(e) => {
            e.stopPropagation();
            toggleColorMode();
          }}
          aria-label="Toggle Theme"
        />
      </HStack>

      {/* Chat Display */}
      {isChatOpen && (
        <VStack
          p="4"
          flex="1"
          spacing="4"
          overflowY="auto"
          bg={useColorModeValue("white", "gray.800")}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={message.sender === "bot" ? "flex-start" : "flex-end"}
              bg={message.sender === "bot" ? "blue.100" : "green.100"}
              px="4"
              py="2"
              borderRadius="lg"
              maxW="80%"
            >
              <Text fontSize="sm" color="gray.800">
                {message.text}
              </Text>
            </Box>
          ))}
        </VStack>
      )}

      {/* Input Box */}
      {isChatOpen && (
        <HStack p="4" bg={bgColor} borderTop="1px solid" borderColor="gray.300">
          <Input
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            colorScheme="teal"
            onClick={handleSendMessage}
            leftIcon={<FaPaperPlane />}
          >
            Send
          </Button>
        </HStack>
      )}
    </Box>
  );
};

export default ChatBot;