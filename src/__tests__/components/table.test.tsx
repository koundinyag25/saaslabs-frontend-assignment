import { fireEvent, render, screen } from "@testing-library/react";
import Table from "../../components/table";

const config = [
  { key: "s.no", label: "S. No" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
];

test("Table has no data", () => {
  render(<Table data={[]} config={config} pageSize={5} />);
  expect(screen.getByText("No data found")).toBeInTheDocument();
});

test("Table has data", () => {
  const data = [
    { "s.no": 1, name: "John Doe", age: 28 },
    { "s.no": 2, name: "Jane Smith", age: 34 },
    { "s.no": 3, name: "Alice Johnson", age: 22 },
    { "s.no": 4, name: "Bob Brown", age: 45 },
    { "s.no": 5, name: "Charlie Davis", age: 31 },
  ];
  render(<Table data={data} config={config} pageSize={5} />);

  // Assert that "No data found" is not displayed
  expect(screen.queryByText("No data found")).not.toBeInTheDocument();

  // Assert that specific rows are rendered
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("28")).toBeInTheDocument();
  expect(screen.getByText("Jane Smith")).toBeInTheDocument();
});

test("Next Button Should change the page", () => {
  const data = [
    { "s.no": 1, name: "John Doe", age: 28 },
    { "s.no": 2, name: "Jane Smith", age: 34 },
    { "s.no": 3, name: "Alice Johnson", age: 22 },
    { "s.no": 4, name: "Bob Brown", age: 45 },
    { "s.no": 5, name: "Charlie Davis", age: 31 },
  ];
  render(<Table data={data} config={config} pageSize={2} />);
  const nextButton = screen.getByTestId("next-button");
  fireEvent.click(nextButton);
  expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
  expect(screen.getByTestId("page-number")).toHaveTextContent("2 / 3");
  const prevButton = screen.getByTestId("prev-button");
  fireEvent.click(prevButton);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByTestId("page-number")).toHaveTextContent("1 / 3");
});
