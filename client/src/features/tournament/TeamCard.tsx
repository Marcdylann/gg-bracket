import { Box, Text} from '@chakra-ui/react';

interface TeamCardProps {
  name: string;
  logo_url?: string;
}

const TeamCard = ({name, logo_url}: TeamCardProps) => {
  return (
    <Box>
      <Text>{name}</Text>
      {logo_url && <img src={logo_url} alt={name} onError={(e) => e.currentTarget.style.display = 'none'} />}
    </Box>
  );
};

export default TeamCard;

