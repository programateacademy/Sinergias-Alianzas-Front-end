import { Form, FormGroup, Label } from "reactstrap";
import "./login.css";
import Background from "./Assets/BackgroundLogin.png";
import LoginIlustration from "./Assets/LoginIlustration.png";

export const Login = () => {
  return (
    <div className="Generalcontainer" style={{ padding: "0", margin: "0" }}>
      
      <img src={Background} alt="" />
      
      <div className="containerLogin">
        <img src={LoginIlustration} alt="" />

        <Form onSubmit={""} className="rowLogin">
          <div className="colLogin">
            <h1>Iniciar Sesión</h1>
            <FormGroup>
              <Label className="user-label" for="email">
                Correo
              </Label>

              <input
                className="input"
                id="email"
                name="email"
                placeholder="Correo"
                type="email"
                /* value={""}
                onChange={""} */
                required
              />
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <Label className="user-label" for="password">
                Contraseña
              </Label>

              <input
                className="input"
                id="password"
                name="password"
                placeholder="Contraseña"
                type="password"
                /* value={""}
                onChange={""} */
                required
              />
            </FormGroup>
          </div>

          <div className="col">
            <button className="col_button">
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Ingresar</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
