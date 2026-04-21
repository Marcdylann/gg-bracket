import { Box, Button, Input, Text } from "@chakra-ui/react";
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

  const handleRegister = async () => {
    if (password != confirmPassword) {
      setError("passwords do not match");
      return;
    }

    await api.post("/auth/register", { username, email, password });
    navigate("/login");
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt={10}
      p={8}
      border="1px solid gray"
      borderRadius="lg"
    >
      {error && <Text color="red.500">{error}</Text>}
      <Text>Register</Text>
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
  );
};

export default Register;
