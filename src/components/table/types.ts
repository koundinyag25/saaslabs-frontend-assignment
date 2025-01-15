export interface TableBodyProps {
  data: dataItem[];
  pageSize: number;
  config: TableConfig[];
}

export interface dataItem {
  "s.no": string;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  "end.time": string;
  location: string;
  "percentage.funded": number;
  "num.backers": string;
  state: string;
  title: string;
  type: string;
  url: string;
}

export interface TableConfig {
  label: string;
  key: string;
  formatter?: (value: string) => string | null;
}

export interface TableProps {
  data: dataItem[];
  config: TableConfig[];
  pageSize: number;
}
