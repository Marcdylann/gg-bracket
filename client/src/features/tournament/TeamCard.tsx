import { Box, Text } from "@chakra-ui/react";

interface TeamCardProps {
  name: string;
  logo_url?: string;
}

const TeamCard = ({ name, logo_url }: TeamCardProps) => {
  return (
    <Box
      border="1px solid gray"
      borderRadius="lg"
      p={6}
      mb={4}
      _hover={{
        transform: "translateY(-2px)",
        transition: "all 0.2s",
        boxShadow: "lg",
      }}
    >
      <Text>{name}</Text>
      {logo_url && (
        <img
          src={logo_url}
          alt={name}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
    </Box>
  );
};

export default TeamCard;
