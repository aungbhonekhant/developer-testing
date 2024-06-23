"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
} from "./ui/pagination";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    pageCount: number;
    currentPage: number;
    setPage: Function
};

const PaginationComponent = ({ pageCount, currentPage, setPage }: Props) => {
 
  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const leftEllipsis = currentPage > 2;
    const rightEllipsis = currentPage < pageCount - 1;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationLinks.push(
          <li key={i}>
            <PaginationLink
              href="#"
              onClick={() => changePage(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </li>
        );
      }
    }

    if (leftEllipsis) {
      paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
    }
    if (rightEllipsis) {
      paginationLinks.splice(
        paginationLinks.length - 1,
        0,
        <PaginationEllipsis key="right" />
      );
    }

    return paginationLinks;
  };

  const changePage = (page: number) => {
    setPage(page)
  };
  return (
    <Pagination>
      <PaginationContent className=" *:cursor-pointer">
        <li>
        <Button
          variant="ghost"
          disabled={currentPage <= 1}
          onClick={() => changePage(currentPage - 1)}
          className="group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-all duration-300 delay-150" />{" "}
          Previous
        </Button>
        </li>
        {generatePaginationLinks()}
        <li>
        <Button
          variant="ghost"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
          className="group"
        >
          Next{" "}
          <ChevronRight className="group-hover:translate-x-1 transition-all duration-300 delay-150" />
        </Button>
        </li>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;