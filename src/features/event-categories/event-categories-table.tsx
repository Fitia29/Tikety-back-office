import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EventCategory } from "@/interfaces/event-categories/event-categories-type";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductsTableProps = {
  eventCategories: EventCategory[];
  page?: number;
  onChangePage?: (page: number) => void;
};

export default function EventCategoriesTable({
  eventCategories,
  page,
  onChangePage,
}: ProductsTableProps) {
  let nextPage;
  let previousPage;

  if (page && onChangePage) {
    nextPage = () => onChangePage(page + 1);
    previousPage = () => page > 1 && onChangePage(page - 1);
  }

  return (
    <>
      <Table className="max-w-[90%]">
        <TableHeader>
          <TableRow className="bg-card hover:bg-card ">
            <TableHead className="text-secondary">Name</TableHead>
            <TableHead className="text-secondary">Description</TableHead>
            <TableHead className="text-secondary">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventCategories.map((category) => (
            <TableRow key={category.id} className="cursor-pointer">
              <TableCell className="truncate text-secondary-foreground">
                {category.name}
              </TableCell>
              <TableCell className="truncate text-secondary-foreground">
                {category.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        {/* <TableFooter className="w-full flex gap-2">
        <div className="flex gap-2">
          <ChevronLeft onClick={previousPage} />
          <ChevronRight onClick={nextPage} />
        </div>
        <p>Page : {page}</p>
      </TableFooter> */}
      </Table>

      <div className="flex gap-2">
        <ChevronLeft onClick={previousPage} />
        <p>Page : {page}</p>
        <ChevronRight onClick={nextPage} />
      </div>
    </>
  );
}
