// Define the blueprint for a generic row's data
export interface TableRow {
  [key: string]: any; // This allows for any number of properties with any names
}

// Discriminated unions for ColumnProperties to define the behavior of each column
type ColumnProperties =
  | { type: "info" }
  | {
      type: "action";
      actionHandler: (row: TableRow) => void;
      actionView: () => JSX.Element;
    };

// Blueprint for each column in the table
export interface Column {
  title: string; // For display
  dataKey: string; // For data access
  properties: ColumnProperties;
}

// Blueprint for the overall table structure
export interface Table {
  tableId: string;
  columns: Column[];
  initialValue: TableRow[];
}
