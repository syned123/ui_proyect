import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../styles.css";
export const Individual = () => {
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
    <>
      <Fab
        size="small"
        color="success"
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
        <DialogTitle id="scroll-dialog-title">Individual</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <FormControl>
              <FormLabel>Requisitos</FormLabel>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Fotocopia CI" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Croquis Domicilio"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Fotocopia Garantia"
                />
              </FormGroup>
              <FormLabel>Registro Cliente</FormLabel>
              <div className="container-textfield">
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
                    label="Apellidos"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="container-textfield">
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
                    label="Direccion"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="container-textfield">
                <div className="textfield">
                  <TextField
                    id="outlined-basic"
                    label="Tel / Cel"
                    variant="outlined"
                  />
                </div>
                <div className="textfield">
                  <TextField
                    id="outlined-basic"
                    label="Cel Ref"
                    variant="outlined"
                  />
                </div>
              </div>
              <FormLabel>Solicitud</FormLabel>
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
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
