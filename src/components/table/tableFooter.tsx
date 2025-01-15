interface TableFooterProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const TableFooter = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: TableFooterProps) => {
  const handleNextAndPrev = (direction: "next" | "prev") => {
    if (direction === "next") {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };
  return (
    <div className="table-footer">
      <div
        className="table-footer-button"
        onClick={() => handleNextAndPrev("prev")}
      >
        &#8249;
      </div>
      {currentPage} / {totalPages}
      <div
        className="table-footer-button"
        onClick={() => handleNextAndPrev("next")}
      >
        &#8250;
      </div>
    </div>
  );
};

export default TableFooter;
