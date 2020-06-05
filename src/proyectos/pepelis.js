/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

class Pepelis extends React.Component {
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
              <h1 className="mt-4">Pepelis</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src="https://github.com/marquitobb/pepelis/raw/master/img/pplis1.png"
                alt=""
              />
              <br />
              <br />
              {/* Post Content */}
              <p className="lead">
                Este proyecto nació cuando estaba en el servicio social y tenía
                que usar el framework de PHP “codeigniter” para proyectos de ahi
                pero esos proyectos no los puedo compartir, así que para
                entenderlo mejor quise desarrollar un proyecto personal el cual
                me diera dinero y estaba en un grupo de facebook que compartían
                peliculas nuevas en mega entonces dije voy a crear una página el
                cual cualquiera pueda entrar y descargar como muchas mas pero
                con menos anuncios ya que se pretendía que se pudieran iniciar
                sesión para tener mayor seguridad y así enviar películas nuevas
                que se agregaran a su correo.
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src="https://github.com/marquitobb/pepelis/raw/master/img/pplis2.png"
                alt=""
              />
              <hr />
              <p>
                Así comenzó utilizando una base de datos mysql ya que usaba el
                stack de xampp que me permitía hacer pruebas locales con apache
                y en la base de datos alojar usuario y películas con sus enlaces
                y todo con PHP.
              </p>
              <hr />
              <img
                className="img-fluid rounded"
                src="https://github.com/marquitobb/pepelis/raw/master/img/pplis3.png"
                alt=""
              />
              <hr/>
              <p>
                Y duró varios meses pero como no quería gastar en nada lo aloje
                en un host llamado 000webhost el cual solo me daba cierta
                cantidad de almacenamiento y vistas entonces cuando crecio un
                poco más se cancelo el servicio porque tenía que pagar y opte
                por hacer un servidor con una raspberry pi pero como ya tenía
                otros proyectos ya no lo migre y asi quedo que actualmente está
                como código abierto en mi github para cualquiera que quiera
                continuarlo.
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
                          <strong>Bootstrap</strong>
                        </li>
                        <li>
                          <strong>HTML</strong>
                        </li>
                        <li>
                            <strong>PHP</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                            <strong>AJAX</strong>
                        </li>
                        <li>
                            <strong>codeigniter</strong>
                        </li>
                        <li>
                            <strong>mysql</strong>
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
                <a href="https://github.com/marquitobb/pepelis">
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

export default Pepelis;
