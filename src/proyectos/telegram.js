/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//asets
import t1 from "../Assets/telegram/telegram.png";
import tec from "../Assets/teclogo.gif";
class Telegram extends React.Component {
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
              <h1 className="mt-4">RASPBERRY CON TELEGRAM</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img
                height="35%"
                width="35%"
                className="img-fluid rounded"
                src={t1}
                alt=""
              />
              <hr />
              {/* Post Content */}
              <p className="lead">
                en este proyecto no tengo tanta documentación ya que hace un
                poco mas de 4 años que lo desarrolle pero era un sistema de
                domótica con la raspberry pi 3 la cual por python permite hacer
                diferentes cosas conectada a motores que permiten como abrir y
                cerrar una puerta, como leds que prendian y apagaban la luz todo
                esto conectado a una api de telegram que permite dar respuesta y
                realizar operaciones para el usuario final ya que respondía a lo
                que se pedía
              </p>
              <p className="lead">
                todo esto lo desarrolle como proyecto de la materia de sistemas
                operativos como proyecto final ya que me pareció sencillo por
                que la raspberry me gusta mucho por ser distribucion linux
                (raspbian) y lo cual a mi me gusta por lo fácil de trabajar
                desde la terminal unix.
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
                          <strong>python</strong>
                        </li>
                        <li>
                          <strong>Gpio lib</strong>
                        </li>
                        <li>
                            <strong>telegram API</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                            <strong>Raspberry</strong>
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
                    src={tec}
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

export default Telegram;
