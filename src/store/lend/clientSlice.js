import { createSlice } from "@reduxjs/toolkit";
// const tempRow = {
//   id: 2,
//   name: "Snow",
//   lastname: "Jon",
//   ci: 35,
//   adress: "buenos aires",
//   phone: "73033211",
//   refPhone: "72584700",
// };
export const clientSlice = createSlice({
  name: "client",
  initialState: {
    isLoadingClients: true,
    rows: [],
    activeRow: null,
  },
  reducers: {
    onSetActiveRow: (state, { payload }) => {
      state.activeRow = payload;
    },
    onAddNewClient: (state, { payload }) => {
      state.rows.push(payload);
      state.activeRow = null;
    },
    onUpdateClient: (state, { payload }) => {
      state.rows = state.rows.map((row) => {
        if (row.id === payload.id) {
          return payload;
        }
        return row;
      });
    },
    onDeleteClient: (state) => {
      if (state.activeRow) {
        state.rows = state.rows.filter((row) => row.id !== state.activeRow.id);
        state.activeRow = null;
      }
    },
    onLoadClient: (state, { payload = [] }) => {
      state.isLoadingClients = false;
      payload.client.forEach((element) => {
        const exists = state.rows.some(
          (dbClient) => dbClient.id === element.id
        );
        if (!exists) {
          state.rows.push(element);
        }
      });
    },
    onLogoutClient: (state) => {
      state.isLoadingClients = true;
      state.rows = [];
      state.activeRow = null;
    },
  },
});
export const {
  onSetActiveRow,
  onAddNewClient,
  onUpdateClient,
  onDeleteClient,
  onLoadClient,
  onLogoutClient,
} = clientSlice.actions;
