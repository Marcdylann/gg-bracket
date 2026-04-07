import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Box, Button, Input, Field, Heading, Stack, Container, Text } from "@chakra-ui/react"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("") // Clear previous errors
    try {
      await login(email, password)
      // If successful, the AuthContext updates and the user is logged in
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please try again.")
    }
  }

  return (
    <Container maxW="md" py={20}>
      <Box p={8} border="1px solid" borderColor="border.subtle" borderRadius="lg" boxShadow="md">
        <Stack gap="6">
          <Heading size="xl" textAlign="center">Admin Login</Heading>
          
          {error && <Text color="red.500" fontSize="sm" textAlign="center">{error}</Text>}

          <form onSubmit={handleSubmit}>
            <Stack gap="4">
              <Field.Root>
                <Field.Label>Email Address</Field.Label>
                <Input 
                  type="email" 
                  variant="outline"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="name@example.com" 
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input 
                  type="password" 
                  variant="outline"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="********" 
                />
              </Field.Root>

              <Button type="submit" colorPalette="blue" width="full" mt="2">
                Sign In
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Container>
  )
}