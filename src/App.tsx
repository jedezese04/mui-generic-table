import React from "react";
import { Button } from "@mui/material";
import { GenericTable } from "./components";
import { Column, TableRow } from "./models";

const App: React.FC = () => {
  // Define the action view for the action column
  const actionView = () => (
    <Button disableElevation color="primary">
      Action
    </Button>
  );

  // Define the action handler for the action column
  const actionHandler = (row: TableRow) => {
    console.log("Action clicked for row:", row);
  };

  // Define the columns for the table
  const columns: Column[] = [
    { title: "Name", dataKey: "name", properties: { type: "info" } },
    { title: "Age", dataKey: "age", properties: { type: "info" } },
    {
      title: "Action",
      dataKey: "",
      properties: { type: "action", actionHandler, actionView }
    }
  ];

  // Define the initial data for the table
  const initialValue: TableRow[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];

  return (
    <div>
      <h1>Generic Table Example</h1>
      <GenericTable
        tableId="exampleTable"
        columns={columns}
        initialValue={initialValue}
      />
    </div>
  );
};

export default App;
