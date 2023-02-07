import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef, useState } from "react";

export const Group = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen("paper")}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div>
              <h5>Requisitos</h5>
            </div>
            <span>Cliente 1</span>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </FormGroup>
            <span>Cliente 2</span>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </FormGroup>
            <span>Cliente 3</span>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </FormGroup>
            <div>
              <div>
                <h5>Registro clientes</h5>
              </div>
              <div className="container-textfield">
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Nombres"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celula Identidad"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular / Telefono"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Apellidos"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular de referencia"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div className="container-textfield">
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Nombres"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celula Identidad"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular / Telefono"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Apellidos"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular de referencia"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <div className="container-textfield">
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Nombres"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celula Identidad"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular / Telefono"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Apellidos"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                    />
                  </div>
                  <div className="textfield">
                    <TextField
                      id="outlined-basic"
                      label="Celular de referencia"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5>Solicitud</h5>
              </div>
              <div className="container-textfield">
                <div className="textfield">
                  <TextField
                    id="outlined-basic"
                    label="Monto"
                    variant="outlined"
                  />
                </div>
                <div className="textfield">
                  <TextField
                    id="outlined-basic"
                    label="Plazo"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
