// dependencies
import React from "react";

// styles
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationC = () => {
  return (
    <Pagination size="sm">
      <PaginationItem>
        <PaginationLink href="#" previous>
          Anterior
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#" next>
          Siguiente
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationC;
