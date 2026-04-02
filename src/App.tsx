import { useState } from 'react'
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'

function App() {
  // 1. THE "SWAP" STATE
  // 'view' is the variable, 'setView' is the function to change it.
  const [view, setView] = useState<'list' | 'bracket'>('list')

  return (
    <Box minH="100vh" bg="gray.950" color="white" p={8}>
      {/* HEADER SECTION */}
      <Flex justify="space-between" align="center" mb={10}>
        <Heading size="xl" color="cyan.400">GG-BRACKET</Heading>
        
        <Flex gap={4}>
          {/* BUTTONS THAT TRIGGER THE SWAP */}
          <Button 
            variant={view === 'list' ? 'solid' : 'outline'} 
            colorScheme="cyan"
            onClick={() => setView('list')}
          >
            Tournament List
          </Button>
          <Button 
            variant={view === 'bracket' ? 'solid' : 'outline'} 
            colorScheme="cyan"
            onClick={() => setView('bracket')}
          >
            View Brackets
          </Button>
        </Flex>
      </Flex>

      {/* 2. THE SWAPPING AREA */}
      <Box p={10} bg="gray.900" borderRadius="2xl" border="1px solid" borderColor="gray.800">
        {view === 'list' ? (
          <VStack align="start" gap={4}>
            <Heading size="md">Ongoing Tournaments</Heading>
            <Text color="gray.400">Valorant Masters Cebu - Live</Text>
            <Text color="gray.400">Dota 2 Inter-Collegiate - Registration Open</Text>
          </VStack>
        ) : (
          <VStack align="start" gap={4}>
            <Heading size="md">Tournament Bracket</Heading>
            <Text color="gray.400">Bracket visualization coming soon...</Text>
          </VStack>
        )}
      </Box>
    </Box>
  )
}

export default App