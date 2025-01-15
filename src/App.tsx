import { useEffect, useState } from "react";
import "./App.css";
import { getRepoList } from "./services/repos";
import Table from "./components/table";
import { TableConfig } from "./components/table/types";
const config: TableConfig[] = [
  {
    label: "S.No.",
    key: "s.no",
  },
  {
    label: "Percentage funded",
    key: "percentage.funded",
    formatter: (value: string) => `${value}%`,
  },
  {
    label: "Amount pledged",
    key: "amt.pledged",
    formatter: (value: string) => `$${value}`,
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

  return (
    <div className="app">
      <div className="table-container">
        <Table data={tableData} config={config} pageSize={10} />
      </div>
    </div>
  );
}

export default App;
