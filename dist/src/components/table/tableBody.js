import { jsx as _jsx } from "react/jsx-runtime";
const TableBody = ({ data, pageSize, config }) => {
    const finalData = data.length < pageSize
        ? [...data, ...Array(pageSize - data.length).fill({})]
        : data;
    const getCellData = (item, column, formatter) => {
        const cellRawData = item[column];
        return (_jsx("td", { className: "cell", children: cellRawData != null && cellRawData != undefined
                ? formatter
                    ? formatter(cellRawData)
                    : cellRawData
                : null }));
    };
    const getRowData = (item) => {
        return config.map((configItem) => {
            return getCellData(item, configItem.key, configItem.formatter);
        });
    };
    console.log({ finalData });
    return (_jsx("tbody", { className: "table-body", children: finalData.map((item) => (_jsx("tr", { className: "table-body-row", children: getRowData(item) }, item["s.no"]))) }));
};
export default TableBody;
