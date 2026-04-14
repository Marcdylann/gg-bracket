import { Text, Flex, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Flex justify="space-between" align="center" p={4} bg="gray.900">
      <Text fontWeight="bold" fontSize="2xl">GG Bracket</Text>
      
      <Flex gap={6}>
        <Link to="/matches">Matches</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/standings">Standings</Link>
      </Flex>

      <Flex>
        {user && <Button onClick={logout}>Logout</Button>}
      </Flex>
    </Flex>
  );
};

export default Navbar;