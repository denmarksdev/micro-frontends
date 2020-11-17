import React from "react";
import { DataGrid } from '@material-ui/data-grid';

const rows = [
  { id: 1, colName: 'World' },
  { id: 2, colName: 'is Awesome' },
  { id: 3, colName: 'is Amazing' },
];

const columns = [
  { field: 'id', headerName: 'CGE', width: 150 },
  { field: 'colName', headerName: 'Nome', width: 150 },
];

export default function Root(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Clientes</h1>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
