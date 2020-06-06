/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//assets
import tv1 from "../Assets/tuvaro/dos.png";
import tv2 from "../Assets/tuvaro/tres.png";
import tv3 from "../Assets/tuvaro/cuatro.png";

class Tuvaro extends React.Component {
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
              <h1 className="mt-4">Tuvaro</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <div className="row">
                <img
                  width="30%"
                  height="30%"
                  className="img-fluid rounded"
                  src={tv1}
                  alt=""
                />
                <img
                  width="30%"
                  height="30%"
                  className="img-fluid rounded"
                  src={tv2}
                  alt=""
                />
                <img
                  width="30%"
                  height="30%"
                  className="img-fluid rounded"
                  src={tv3}
                  alt=""
                />
              </div>              
              <hr />
              {/* Post Content */}
              <p className="lead">
                esta es una aplicación pequeña pero en crecimiento la cual la
                cree con la finalidad de llegar a hacer como un estilo de
                tarjeta electrónica pero que dieran el saldo de tu monedero y se
                registren compras.
              </p>              
              <p className="lead">
                todo esto se desarrolló en flutter con dart ya que esa fue una
                de la intenciones, aprender más del framework y calar su
                funcionalidad con IOS y android con un mismo código y pues
                tambien tener sus ventajas y desventajas.
              </p>              
              <p className="lead">
                y también recalcar que se usó mucho nodejs para el backend con
                el modelo mongoose el cual se tenían que dar roles y hacer
                operaciones para evaluar el dinero de compras el total que se
                estaba gastando y mas cosas, lo cual opte por una base de datos
                no relacional ya que si seguía creciendo el proyecto es más
                fácil agregar columnas nuevas a una base de datos nosql que a
                una tradicional y siempre de lenguaje para backend node js ya
                que me parece sencillo y veloz, también recordando que es
                javascript es mi lenguaje favorito
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
                          <strong>flutter</strong>
                        </li>
                        <li>
                          <strong>dart</strong>
                        </li>                        
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>JavaScript</strong>                         
                        </li>
                        <li>
                          <strong>node js</strong>
                        </li>
                        <li>
                          <strong>mongo db</strong>
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
                  <a href="https://github.com/marquitobb/tuvaro">
                    <img
                      className="img-fluid rounded"
                      src="https://firebasestorage.googleapis.com/v0/b/deploy-react-8cb9c.appspot.com/o/mc%2Fjeje.png?alt=media&token=a7494120-a228-4832-bd3d-ec4ffa6fa454"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tuvaro;
