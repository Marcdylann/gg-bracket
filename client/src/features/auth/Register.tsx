import { Box, Button, Input, Field, Heading, Stack, Container, Text } from "@chakra-ui/react"
import { useState } from "react";
import api from "../../api/axios";
import {useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);

  const handleRegister = async () => {
    if (password != confirmPassword) {
      setError("passwords do not match");
      return;
    }

    await api.post("/auth/register", { username, email, password });
    navigate("/login");
  };

  return (
    <Container maxW="md" py={20} >
    <Box
      p={8}
      border="1px solid"
      borderRadius="lg"
      borderColor="border.subtle"
    >
      {error && <Text color="red.500">{error}</Text>}
      <Heading size="xl" textAlign="center">Register User</Heading>
      <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        mb={4}
      />

      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={4}
      />

      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={4}
      />

      <Input
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        mb={4}
      />

      <Button onClick={handleRegister}>Submit</Button>
    </Box>
    </Container>
  );
};

export default Register;
