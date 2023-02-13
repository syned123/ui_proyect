import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Header } from "../components/Header";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";
import { useState } from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export const User = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="contenedor-first">
      <div className="contenedor-header">
        <div>
          <Header title="Usuarios" />
        </div>
        <div>
          <Fab
            size="small"
            color="success"
            aria-label="add"
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Usuarios
            </BootstrapDialogTitle>
            <DialogContent dividers>
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
                    label="Correo"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="container-textfield">
                <div className="textfield">
                  <TextField
                    id="outlined-basic"
                    label="Contraseña"
                    variant="outlined"
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Guardar
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
};
