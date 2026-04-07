import { Table, Badge, Heading, Box } from "@chakra-ui/react";
import { tournaments } from "../data/mockData";

const TournamentList = () => {
  return (
    <Box>
      <Heading size="lg" mb={6} color="cyan.400">Tournament Registry</Heading>
      
      {/* In v3, we use Table.Root and its sub-components */}
      <Table.Root variant="line" interactive>
        <Table.Header bg="gray.900">
          <Table.Row>
            <Table.ColumnHeader color="gray.500">Name</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.500">Game</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.500">Status</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end" color="gray.500">Teams</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {tournaments.map((t) => (
            <Table.Row key={t.id} _hover={{ bg: "whiteAlpha.50" }}>
              <Table.Cell fontWeight="bold">{t.name}</Table.Cell>
              <Table.Cell>{t.game}</Table.Cell>
              <Table.Cell>
                <Badge colorScheme={t.status === 'Live' ? 'green' : 'blue'}>
                  {t.status}
                </Badge>
              </Table.Cell>
              <Table.Cell textAlign="end">{t.teams}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TournamentList;