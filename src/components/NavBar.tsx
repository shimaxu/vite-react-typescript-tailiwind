import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding={2}>
        <Image src={logo} boxSize={12}></Image>
        <SwitchColorMode />
      </HStack>
    </div>
  );
};

export default NavBar;
