import { jsx as _jsx } from "react/jsx-runtime";
const TableHeader = ({ config }) => {
    return (_jsx("thead", { className: "table-header", children: _jsx("tr", { children: config.map((item) => (_jsx("th", { children: item.label }, item.key))) }) }));
};
export default TableHeader;
