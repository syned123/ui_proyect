import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useClientStore } from "../../../hooks";

export const DeleteClient = () => {
  const { deleteClient } = useClientStore();
  const handleDelete = () => {
    deleteClient();
  };
  return (
    <IconButton onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
};
