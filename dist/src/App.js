import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./App.css";
import { getRepoList } from "./services/repos";
import Table from "./components/table";
const config = [
    {
        label: "S.No.",
        key: "s.no",
    },
    {
        label: "Percentage funded",
        key: "percentage.funded",
        formatter: (value) => `${value}%`,
    },
    {
        label: "Amount pledged",
        key: "amt.pledged",
        formatter: (value) => `$${value}`,
    },
];
function App() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await getRepoList();
            setTableData(data);
        })();
    }, []);
    return (_jsx("div", { className: "app", children: _jsx("div", { className: "table-container", children: _jsx(Table, { data: tableData, config: config, pageSize: 10 }) }) }));
}
export default App;
