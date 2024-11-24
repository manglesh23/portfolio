import React from "react";
import { Box, Heading, Text, VStack, Link, SimpleGrid,Badge } from "@chakra-ui/react";

const NpmPackages = ({ packages }) => {
  return (
    <Box bg="gray.900" boxShadow="md" borderRadius="md" p={2} w="100%" size="lg">
      <Heading as="h5" size="lg" mb={4} textAlign="center" color="white">
        NPM Packages Worked on
      </Heading>
      {/* <VStack spacing={2} align="stretch"> */}
      <SimpleGrid columns={{ base: 2, sm: 6, md: 4 }} spacing={4}>
        {packages.map((pkg, index) => (
          <Badge
            key={index}
            bg="gray.50"
            p={4}
            borderRadius="md"
            size="lg"
            boxShadow="sm"
            _hover={{ boxShadow: "lg" }}
            transition="box-shadow 0.2s"
          >
            <Heading as="h4" size="sm" mb={4}>
              {pkg.name}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {pkg.description}
            </Text>
            <Link href={pkg.link} color="teal.500" isExternal>
              View on NPM
            </Link>
          </Badge>
        ))}
      </SimpleGrid>
      {/* </VStack> */}
    </Box>
  );
};

export default NpmPackages;
