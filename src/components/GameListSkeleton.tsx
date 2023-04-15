import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameListSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="215px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameListSkeleton;
