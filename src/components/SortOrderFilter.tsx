import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortOrderFilter = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    {
      label: "Relavance",
      value: "",
    },
    {
      label: "Released Date",
      value: "-released",
    },
    {
      label: "Added Date",
      value: "-added",
    },
    {
      label: "Rating",
      value: "-rating",
    },
    {
      label: "Rating Score",
      value: "-metacritic",
    },
  ];

  const selectedSortOrder = sortOrders.find(
    (order) => order.value == sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOder) => (
          <MenuItem
            key={sortOder.value}
            value={sortOder.value}
            onClick={() => onSelectSortOrder(sortOder.value)}
          >
            {sortOder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderFilter;
