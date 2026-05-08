

const statusColors = (status: string) => {
  if (status === "Live") return "green.500";
  if (status === "Final") return "red.500";
  return "gray.500";
};

export default statusColors;