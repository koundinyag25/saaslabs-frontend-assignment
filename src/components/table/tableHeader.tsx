import { TableConfig } from "./types";

interface TableHeaderProps {
  config: TableConfig[];
}

const TableHeader = ({ config }: TableHeaderProps) => {
  return (
    <thead className="table-header">
      <tr>
        {config.map((item) => (
          <th key={item.key}>{item.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
