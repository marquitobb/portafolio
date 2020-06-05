/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//assets
import des3 from "../Assets/carrojap2/test2.gif";
import des from "../Assets/carrojap2/demo.gif";
import logo from "../Assets/carrojap2/jeje.jpg";

class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        {/* Page Content */}
        <div className="container">
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Title */}
              <h1 className="mt-4">Carro bot</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src={logo}
                alt=""
                width="60%"
                height="60%"
              />
              <hr />
              {/* Post Content */}
              <p className="lead">
                Decir que este proyecto fue por parte de la materia de sistemas
                electrónicos la cual aprendimos a utilizar casi todos los
                componentes electrónicos con la placa arduino y de proyecto
                final teníamos que hacer un carro el cual permitiera recoger un
                objeto y llevarlo hasta otro punto, el cual en conjunto con un
                compañero elaboramos y nuestro carro fue el ganador de todos
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src={des3}
                alt=""
                width="30%"
                height="30%"
              />
              <hr />
              <p>
                esto gracias a que sabíamos algo del lenguaje c++ y nos permitió
                hacer el código sin problema y recalcar que trabajamos en
                conjunto las herramientas de github que otorga a los
                desarrolladores que están estudiando como un simulador de
                arduino el cual nos permitió hacer nuestras pruebas para después
                implementarlas a producción.
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src={des}
                alt=""
                width="30%"
                height="30%"
              />
              <p>
                Y en conclusión nuestro proyecto fue el único que realizó el
                recorrido completo del circuito aunque no tengo video de la
                prueba, fue el ganador y el tec se quedó con él para presentarlo
                a los estudiantes de nuevo ingreso                
              </p>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4">
              {/* Search Widget */}
              <div className="card my-4">
                <h5 className="card-header">Regresar pagina principal</h5>
                <div className="card-body">
                  <div className="card text-center">
                    <button
                      onClick={() => this.refreshPage()}
                      className="btn btn-success"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faRedoAlt} color="white" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">
                  Leguajes y librerias para su desarrollo
                </h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>Arduino IDLE</strong>
                        </li>
                        <li>
                          <strong>Componentes electronicos</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>C++</strong>
                        </li>
                        <li>
                          <strong>IOT</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">clientes</h5>
                <div className="card-body">
                  <img
                    className="img-fluid rounded"
                    src="https://lh3.googleusercontent.com/proxy/Iy7zWBngl2zzCfKgfyjUeJBulCZPEQuxoDgLoAbaJltmM4WQ-nV0Aw4PTpVdeQisdWmjWq7xhfOI8w2B25RMfGCh09Kc"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carro;
