import { Table, Thead, Tbody, Tr, Th, Td, Badge, TableContainer, Heading, Box } from "@chakra-ui/react";
import { tournaments } from "../data/mockData"; 

const TournamentList = () => {
  return (
    <Box>
      <Heading size="lg" mb={6} color="cyan.400">Tournament Registry</Heading>
      <TableContainer border="1px solid" borderColor="gray.800" borderRadius="xl">
        <Table variant="simple">
          <Thead bg="gray.900">
            <Tr>
              <Th color="gray.500">Name</Th>
              <Th color="gray.500">Game</Th>
              <Th color="gray.500">Status</Th>
              <Th isNumeric color="gray.500">Teams</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tournaments.map((t) => (
              <Tr key={t.id} _hover={{ bg: "whiteAlpha.50" }}>
                <Td fontWeight="bold">{t.name}</Td>
                <Td>{t.game}</Td>
                <Td>
                  <Badge colorScheme={t.status === 'Live' ? 'green' : t.status === 'Upcoming' ? 'blue' : 'gray'}>
                    {t.status}
                  </Badge>
                </Td>
                <Td isNumeric>{t.teams}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TournamentList;