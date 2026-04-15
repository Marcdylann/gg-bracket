import { Text, Flex, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex justify="space-between" align="center" p={4} bg="gray.900">
      <Link to ="/">GG Bracket</Link>
      
      <Flex gap={6}>
        <Link to="/matches">Matches</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/standings">Standings</Link>
      </Flex>

      <Flex>
        {user && <Button onClick = {()=>{logout(); navigate('login');}}>Logout</Button>}
      </Flex>
    </Flex>
  );
};

export default Navbar;