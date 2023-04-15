import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
const GameListSkeleton = () => {
  return (
    <Card>
      <Skeleton height="215px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameListSkeleton;
