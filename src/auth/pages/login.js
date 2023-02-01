import "./styleLogin.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
export const Login = () => {
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="contenedorPadre">
          <div className="contenedorHijo">
            <div className="contenedorIzquierda"></div>
            <div className="contenedorDerecha">
              <form className="login-form">
                <span className="login-form-title">Inicio Sesion</span>
                <div className="wrap-input">
                  <input
                    type="text"
                    name="user"
                    className="input"
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
                    name="pass"
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
