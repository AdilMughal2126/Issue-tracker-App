import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemsCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  return (
    <Flex align={"center"} gap={"2"}>
      <Text size={"2"}>
        Page {currentPage} of {pageCount}
      </Text>
        <Button color="gray" variant="soft" disabled={currentPage === 1}>
            <DoubleArrowLeftIcon/>
        </Button>
        <Button color="gray" variant="soft" disabled={currentPage === 1}>
            <ChevronLeftIcon/>
        </Button>
        <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
            <ChevronRightIcon/>
        </Button>
        <Button color="gray" variant="soft" disabled={currentPage === pageCount}>
            <DoubleArrowRightIcon/>
        </Button>
    </Flex>
  );
};

export default Pagination;
