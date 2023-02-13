import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { Header } from "../../components/Header";

import { ClientModal } from "./ClientModal";
import { useClientStore } from "../../../hooks";
import { AddNewClient } from "./AddNewClient";
import { DeleteClient } from "./DeleteClient";

export const Client = () => {
  const { rows, setActiveRow, startLoadingClient } = useClientStore();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 150,
      editable: true,
    },
    {
      field: "lastname",
      headerName: "lastname",
      width: 150,
      editable: true,
    },
    {
      field: "ci",
      headerName: "ci",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "adress",
      headerName: "adress",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "phone",
      width: 150,
      editable: true,
    },
    {
      field: "refPhone",
      headerName: "refPhone",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "Editar",
      headerName: "Editar",
      width: 100,
      renderCell: (cellValues) => {
        return <ClientModal />;
      },
    },
    {
      field: "Eliminar",
      headerName: "Eliminar",
      width: 100,
      renderCell: (cellValues) => {
        return <DeleteClient />;
      },
    },
  ];
  const onDoubleClick = (row) => {
    console.log(row.row);
    setActiveRow(row.row);
  };
  useEffect(() => {
    startLoadingClient();
  }, []);

  return (
    <>
      <div className="contenedor-first">
        <div className="contenedor-header">
          <div>
            <Header title="Clientes" />
          </div>
          <div>
            <AddNewClient />
          </div>
        </div>
        <div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              experimentalFeatures={{ newEditingApi: true }}
              getRowId={(rows) => rows.id}
              onRowClick={onDoubleClick}
            />
          </Box>
        </div>
      </div>
    </>
  );
};
