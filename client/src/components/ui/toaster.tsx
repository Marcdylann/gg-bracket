import {
  Toaster as ChakraToaster,
  createToaster,
  Box,
  Text,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
});

export function Toaster() {
  return (
    <ChakraToaster toaster={toaster}>
      {(toast) => (
        <Box
          bg="gray.800"
          color="white"
          px={4}
          py={3}
          borderRadius="md"
          boxShadow="lg"
          borderLeft="4px solid"
          borderColor={toast.type === "success" ? "purple.700" : "red.400"}
        >
          <Text fontWeight="bold">{toast.title}</Text>
        </Box>
      )}
    </ChakraToaster>
  );
}
