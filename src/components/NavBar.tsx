import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={12}></Image>
        <Text>NavBar Menu items</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
