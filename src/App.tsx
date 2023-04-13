import { Button } from "@chakra-ui/react";

const App = () => {
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      size="lg"
      onClick={() => console.log("clicked")}
    >
      Button
    </Button>
  );
};

export default App;
