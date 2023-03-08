// dependencies
import React from "react";

// styles
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationC = ({ setCurrentPage, currentPage, numberOfPages, dispatch }) => {
  const renderPagination = () => {
    if (currentPage === numberOfPages && currentPage === 1) return null;
    if (currentPage === 1) {
      return (
        <Pagination size="sm">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" onClick={()=> dispatch(setCurrentPage(currentPage + 1))} next>
              Siguiente
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      );
    }else if(currentPage !== numberOfPages){
      return(
        <Pagination size="sm">
          <PaginationItem>
            <PaginationLink href="#" onClick={()=> dispatch(setCurrentPage(currentPage - 1))} previus>
              Anterior
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">{currentPage}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" onClick={()=> dispatch(setCurrentPage(currentPage + 1))} next>
              Siguiente
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      );
    }else{
      return(
        <Pagination size="sm">
          <PaginationItem>
            <PaginationLink href="#" onClick={()=> dispatch(setCurrentPage(currentPage - 1))} previus>
              Anterior
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">{currentPage}</PaginationLink>
          </PaginationItem>
        </Pagination>
      );
    }
  }
  return (
    <div>{renderPagination()}</div>
  );
};

export default PaginationC;
