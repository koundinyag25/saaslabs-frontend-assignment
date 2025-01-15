import "./table.css";
import TableHeader from "./tableHeader";
import TableFooter from "./tableFooter";
import TableBody from "./tableBody";
import { TableProps } from "./types";
import { useState } from "react";

const Table = ({ data, config, pageSize }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = Math.abs((currentPage - 1) * pageSize);
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <div className="table-container">
      <table className="table">
        <TableHeader config={config} />
        {data.length > 0 ? (
          <TableBody data={currentData} pageSize={pageSize} config={config} />
        ) : (
          <div className="table-body-row">No data found</div>
        )}
      </table>
      <TableFooter
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / pageSize)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
