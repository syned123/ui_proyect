import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useClientStore, useUiStore } from "../../../hooks";

export const AddNewClient = () => {
  const { openClientModal } = useUiStore();
  const { setActiveRow } = useClientStore();
  const handleClickNew = () => {
    setActiveRow({
      name: "",
      lastname: "",
      ci: "",
      adress: "",
      phone: "",
      refPhone: "",
    });
    openClientModal();
  };

  return (
    <Fab
      size="small"
      color="secondary"
      aria-label="add"
      onClick={handleClickNew}
    >
      <AddIcon />
    </Fab>
  );
};
