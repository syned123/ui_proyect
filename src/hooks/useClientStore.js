import { useDispatch, useSelector } from "react-redux";
import { lendApi } from "../api";
import {
  onAddNewClient,
  onDeleteClient,
  onLoadClient,
  onSetActiveRow,
  onUpdateClient,
} from "../store";

export const useClientStore = () => {
  const dispatch = useDispatch();
  const { rows, activeRow } = useSelector((state) => state.client);
  const setActiveRow = (clientRow) => {
    dispatch(onSetActiveRow(clientRow));
  };

  const startSavingClient = async (clientRow) => {
    try {
      if (clientRow.id) {
        await lendApi.put(`/client/updateClient/${clientRow.id}`, clientRow);
        dispatch(onUpdateClient({ ...clientRow }));
        return;
      } else {
        const { data } = await lendApi.post("/client/newClient", clientRow);
        console.log({ data });
        dispatch(onAddNewClient({ ...clientRow, id: data.client.id }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteClient = async () => {
    try {
      await lendApi.delete(`/client/deleteClient/${activeRow.id}`);
      dispatch(onDeleteClient());
    } catch (error) {
      console.log(error);
    }
  };
  const startLoadingClient = async () => {
    try {
      const { data } = await lendApi.get("/client/getClient");
      dispatch(onLoadClient(data));
    } catch (error) {
      console.log("error cargando clientes");
      console.log(error);
    }
  };

  return {
    activeRow,
    rows,
    hasRowSelected: !!activeRow,
    setActiveRow,
    startSavingClient,
    deleteClient,
    startLoadingClient,
  };
};
