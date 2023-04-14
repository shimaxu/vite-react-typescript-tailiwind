import { Switch, useColorMode } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme="green">
        Dark
      </Switch>
    </div>
  );
};

export default SwitchColorMode;
