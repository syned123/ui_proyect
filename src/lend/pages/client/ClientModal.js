import {
  Box,
  
  IconButton,
  Modal,
  TextField,
  
} from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import { useClientStore, useUiStore } from "../../../hooks";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ClientModal = () => {
  const { isClientModalOpen, openClientModal, closeClientModal } = useUiStore();
  const { activeRow, startSavingClient } = useClientStore();
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    ci: "",
    adress: "",
    phone: "",
    refPhone: "",
  });
  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (formValues.name.length <= 0) return;
    console.log(formValues);
    await startSavingClient(formValues);
    closeClientModal();
  };
  useEffect(() => {
    if (activeRow !== null) {
      setFormValues({ ...activeRow });
    }
  }, [activeRow]);

  return (
    <>
      <IconButton onClick={openClientModal}>
        <EditIcon />
      </IconButton>
      <Modal
        open={isClientModalOpen}
        onClose={closeClientModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmit}>
            <div>
              <div>Cliente</div>
              <div>
                <div className="container-textfield">
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Nombres"
                      variant="outlined"
                      name="name"
                      value={formValues.name}
                      onChange={onInputChanged}
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Apellidos"
                      variant="outlined"
                      name="lastname"
                      value={formValues.lastname}
                      onChange={onInputChanged}
                    />
                  </div>
                </div>
                <div className="container-textfield">
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celula Identidad"
                      variant="outlined"
                      name="ci"
                      value={formValues.ci}
                      onChange={onInputChanged}
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                      name="adress"
                      value={formValues.adress}
                      onChange={onInputChanged}
                    />
                  </div>
                </div>
                <div className="container-textfield">
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular"
                      variant="outlined"
                      name="phone"
                      value={formValues.phone}
                      onChange={onInputChanged}
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Ref Celular"
                      variant="outlined"
                      name="refPhone"
                      value={formValues.refPhone}
                      onChange={onInputChanged}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type="">Guardar</button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
