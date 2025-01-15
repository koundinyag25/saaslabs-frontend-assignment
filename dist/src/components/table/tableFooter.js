import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TableFooter = ({ currentPage, totalPages, setCurrentPage, }) => {
    const handleNextAndPrev = (direction) => {
        if (direction === "next") {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
        }
        else {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
    };
    return (_jsxs("div", { className: "table-footer", children: [_jsx("div", { className: "table-footer-button", onClick: () => handleNextAndPrev("prev"), "data-testid": "prev-button", children: "\u2039" }), _jsxs("div", { className: "table-footer-page-number", "data-testid": "page-number", children: [currentPage, " / ", totalPages] }), _jsx("div", { "data-testid": "next-button", className: "table-footer-button", onClick: () => handleNextAndPrev("next"), children: "\u203A" })] }));
};
export default TableFooter;
