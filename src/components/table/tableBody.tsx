import { TableBodyProps, dataItem } from "./types";

const TableBody = ({ data, pageSize, config }: TableBodyProps) => {
  const finalData =
    data.length < pageSize
      ? [...data, ...Array(pageSize - data.length).fill({})]
      : data;

  const getCellData = (
    item: dataItem,
    column: string,
    formatter?: (value: string) => string | null
  ) => {
    const cellRawData = item[column as keyof dataItem];
    return (
      <td className="cell">
        {cellRawData != null && cellRawData != undefined
          ? formatter
            ? formatter(cellRawData as string)
            : cellRawData
          : null}
      </td>
    );
  };
  const getRowData = (item: dataItem) => {
    return config.map((configItem) => {
      return getCellData(item, configItem.key, configItem.formatter);
    });
  };

  console.log({ finalData });
  return (
    <tbody className="table-body">
      {finalData.map((item: dataItem) => (
        <tr key={item["s.no"]} className="table-body-row">
          {getRowData(item)}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
