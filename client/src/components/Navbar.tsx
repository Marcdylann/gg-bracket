import { Text, Flex, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg="gray.900"
      boxShadow="lg"
    >
      <Link to="/">
        <Text fontSize="3xl" fontWeight="bold">
          GG Bracket
        </Text>
      </Link>

      <Flex gap={6}>
        <Link to="/matches">
          <Text
            _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
          >
            Matches
          </Text>
        </Link>
        <Link to="/teams">
          <Text
            _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
          >
            Teams
          </Text>
        </Link>
        <Link to="/standings">
          <Text
            _hover={{ transform: "translateY(-2px)", transition: "all 0.2s" }}
          >
            Standings
          </Text>
        </Link>
      </Flex>

      <Flex>
        {user && (
          <Button
            onClick={() => {
              logout();
              navigate("login");
            }}
          >
            Logout
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
