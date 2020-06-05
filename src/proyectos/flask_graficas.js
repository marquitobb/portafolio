/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//assets
import fg1 from "../Assets/flask_graficas/fg1.png";
import fg2 from "../Assets/flask_graficas/fg2.png";
import fg3 from "../Assets/flask_graficas/fg3.png";

class FlaskGraficas extends React.Component {
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
              <h1 className="mt-4">GRAFICAR DATOS (MINERIA DE DATOS)</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img className="img-fluid rounded" src={fg1} alt="" />
              <hr />
              {/* Post Content */}
              <p className="lead">
                Este fue el proyecto final pequeño en una de las materias de la
                especialidad de ciencia de datos del tecnológico de colima y a
                lo largo de la materia vimos varias librerías de python, ya que
                python es un de los lenguajes que mas llegue a manejar en
                proyectos de domótica con la “raspberry pi” y para este caso
                necesitamos librerías para minería de datos como pandas y
                matplotlib..
              </p>
              <p>
                En el cual seleccionamos un archivo en formato de excel o CSV el
                cual lo leería con pandas y te permitirá graficar dependiendo el
                nombre de columna que seleccionaste y mezclaras esto desde la
                web como menciona el proyecto se desarrolló con flask para crear
                una rest api
              </p>
              <hr />
              <img
                width="700px"
                height="500px"
                className="img-fluid rounded"
                src={fg2}
                alt=""
              />
              <p>
                y una vez que se selecciona el tipo de columna se buscan datos
                interesantes los cuales graficar en porcentaje ya sea en grafica
                de pastel, barras o puntos y este es un proyecto que se ve
                sencillo pero tarde una semana en desarrollar porque yo no
                estaba muy familiarizado con python en web pero todo lo que me
                propongo trato de resolver.
              </p>
              <hr />
              <img
                width="700px"
                height="500px"
                className="img-fluid rounded"
                src={fg3}
                alt=""
              />
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
                          <strong>Web Design</strong>
                        </li>
                        <li>
                          <strong>HTML</strong>
                        </li>
                        <li>
                            <strong>python</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                            <strong>pandas</strong>
                        </li>
                        <li>
                            <strong>matplotlib</strong>
                        </li>
                        <li>
                            <strong>flask</strong>
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

export default FlaskGraficas;
