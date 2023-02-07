import "./styleLogin.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import Swal from "sweetalert2";
const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};
export const Login = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);
  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticacion", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="contenedorPadre">
          <div className="contenedorHijo">
            <div className="contenedorIzquierda"></div>
            <div className="contenedorDerecha">
              <form className="login-form" onSubmit={loginSubmit}>
                <span className="login-form-title">Inicio Sesion</span>
                <div className="wrap-input">
                  <input
                    type="text"
                    className="input"
                    name="loginEmail"
                    value={loginEmail}
                    onChange={onLoginInputChange}
                    placeholder="Usuario"
                  />
                  <span className="focus-input"></span>
                  <span className="symbol-input">
                    <FaUser className="" />
                  </span>
                </div>
                <div className="wrap-input">
                  <input
                    type="password"
                    name="loginPassword"
                    value={loginPassword}
                    onChange={onLoginInputChange}
                    className="input"
                    placeholder="Contraseña"
                  />
                  <span className="focus-input"></span>
                  <span className="symbol-input">
                    <RiLockPasswordFill className="" />
                  </span>
                </div>
                <div className="login-form-btn-container">
                  <button className="login-form-btn">Iniciar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
