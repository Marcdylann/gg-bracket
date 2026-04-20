import { Box, Text, Flex } from "@chakra-ui/react";

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
      <Flex align="center" gap={4}>
        <Text>{name}</Text>
        {logo_url && (
          <img
            width="50px"
            height="50px"
            style={{ objectFit: "contain" }}
            src={logo_url}
            alt={name}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
      </Flex>
    </Box>
  );
};

export default TeamCard;
