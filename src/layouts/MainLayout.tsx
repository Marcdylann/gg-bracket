import { Box, Flex, VStack, Text, Heading, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // The "View" we are currently looking at
  onViewChange: (view: "list" | "bracket") => void; // The "Remote Control" function
}

export const MainLayout = ({ children, onViewChange }: LayoutProps) => {
  return (
    <Flex h="100vh" bg="gray.950" color="white">
      {/* SIDEBAR */}
      <VStack w="250px" bg="gray.900" p={6} align="start" borderRight="1px solid" borderColor="gray.800">
        <Heading size="md" mb={10} color="cyan.400">GG-BRACKET</Heading>
        
        <VStack align="start" gap={4} width="full">
          <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase">Menu</Text>
          <Text cursor="pointer" _hover={{ color: "cyan.300" }} onClick={() => onViewChange("list")}>Tournament List</Text>
          <Text cursor="pointer" _hover={{ color: "cyan.300" }} onClick={() => onViewChange("bracket")}>Visual Bracket</Text>
        </VStack>
      </VStack>

      {/* CONTENT AREA */}
      <Box flex="1" p={8} overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};