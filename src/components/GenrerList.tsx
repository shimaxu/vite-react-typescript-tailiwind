import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/crop-image-url";

const GenrerList = () => {
  const { model, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {model.map((genrer) => (
        <ListItem key={genrer.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genrer.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg"> {genrer.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenrerList;
