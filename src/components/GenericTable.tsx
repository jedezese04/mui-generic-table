import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { Table as ITable } from "../models";

interface TableProps extends ITable {}

export const GenericTable: React.FC<TableProps> = ({
  tableId,
  columns,
  initialValue
}) => {
  return (
    <TableContainer component={Paper} id={tableId}>
      <Table aria-label="generic table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.title}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {initialValue.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.dataKey}>
                  {column.properties.type === "info" ? (
                    row[column.dataKey]
                  ) : (
                    <span
                      onClick={() =>
                        (column.properties as any).actionHandler(row)
                      }
                    >
                      {column.properties.actionView()}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
