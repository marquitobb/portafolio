/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//assets
import pv1 from "../Assets/punto de venta/trespv.png";
import timeoff from "../Assets/punto de venta/timeoff.png";

class PuntoVenta extends React.Component {
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
              <h1 className="mt-4">Punto de Venta</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img className="img-fluid rounded" src={pv1} alt="" />
              <hr />
              {/* Post Content */}
              <p className="lead">
                Este es un pequeño proyecto que nació desde el 2017 que fue
                cuando lo comencé a desarrollar para una pequeña tienda de
                abarrotes que quería un punto de venta pero tenían pocos
                recursos y querían algo sencillo y no tan costoso, entonces
                desarrolle en JAVA para escritorio ya que lo querían era una
                aplicación de computadora y para ese entonces era ese o c# y
                opte por JAVA ya que es el que mejor había manejado y más sabia
                en ese entonces y use de base de datos MYSQL pero local ya que
                como mencione no tenían muchos recursos.
              </p>
              <hr></hr>
              <h4>video del software adaptado al cliente</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6I5DfNyOE_s"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
              <hr></hr>
              <p>
                Después de otros pequeños negocios fue cuando una boutique con
                varias sucursales en colima pidieron algo parecido ya que no
                querían pagar el hosting para una página web y fue cuando
                analize en que desarrollarlo porque estaba otra propuesta como
                es electrón js y a mi javascript me vienen muy bien pero todavía
                electrón se encontraba muy verde y sin tanta documentación.
              </p>
              <p>
                Entonces opte por retomar el software con JAVA pero esta vez con
                una mejor interfaz y esta vez para que todas la sucursales
                tuvieran la misma base de datos mysql use los servicios de
                clever-cloud ya que a diferencia de otras me parece rapida y
                barata.
              </p>
              <p>
                ya después de varia modificaciones con el cliente al fin quedó
                como se muestra en el video pero los datos que muestra el video
                son datos de prueba.
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
                          <strong>JAVA</strong>
                        </li>
                        <li>
                          <strong>lib javamysql</strong>
                        </li>
                        <li>
                          <strong>XAMP</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>MYSQL</strong>
                        </li>
                        <li>
                          <strong>clever-cloud</strong>
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
                  <img className="img-fluid rounded" src={timeoff} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PuntoVenta;
