import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./table.css";
import TableHeader from "./tableHeader";
import TableFooter from "./tableFooter";
import TableBody from "./tableBody";
import { useState } from "react";
const Table = ({ data, config, pageSize }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = Math.abs((currentPage - 1) * pageSize);
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);
    return (_jsxs("div", { className: "table-container", children: [_jsxs("table", { className: "table", children: [_jsx(TableHeader, { config: config }), data.length > 0 ? (_jsx(TableBody, { data: currentData, pageSize: pageSize, config: config })) : (_jsx("div", { className: "table-body-row", children: "No data found" }))] }), _jsx(TableFooter, { currentPage: currentPage, totalPages: Math.ceil(data.length / pageSize), setCurrentPage: setCurrentPage })] }));
};
export default Table;
