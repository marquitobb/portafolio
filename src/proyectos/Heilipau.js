/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
//assets
import hieli1 from "../Assets/Hielipau/hieli1.png";
import logo from "../Assets/Hielipau/hielipaulogo.png";

class Hielipau extends React.Component {
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
              <h1 className="mt-4">Hielipau Inventario</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img className="img-fluid rounded" src={hieli1} alt="" />
              <hr />
              {/* Post Content */}
              <p className="lead">
                Este proyecto fue requerido por un pequeño negocio de ventas de
                hielos de colima que quería tener un control ya que el problema
                era que le hacían pedidos y no sabia cuantos tenia en existencia
                ya que tenía que contar el producto o también no estaba en el
                negocio, entonces se diseñó una base de datos no relacional a la
                medida la cual pudiera llevar un control del producto como el
                stock eso para la primera fase
              </p>
              <hr />
              <h4>video ya usando el software nuestro cliente</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NpmUDyFTGtM"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
              <hr />
              <p>
                Después solicitó una nueva actualización ya que quería
                automatizar el momento de tomar las órdenes cuando llegaba el
                cliente a comprar el producto...
              </p>
              <p>
                Entonces se implementó un formulario de venta en el cual al
                momento de llegar un cliente se le tomaba la orden y se agregaba
                el producto a un detalle de venta el cual se modifica el stock y
                se creaba un el precio de cada producto y el precio total a
                pagar + IVA, y una vez que se realizaba la compra se confirmaba
                y se agregaba a ventas realizadas ordenadas por fecha (como se
                ve en la parte final del video)
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
                          <strong>React js</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <strong>restAPI</strong>
                        </li>
                        <li>
                          <strong>Node js</strong>
                        </li>
                        <li>
                          <strong>Mongodb</strong>
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
                  <a href="https://www.instagram.com/hielipau/">
                    <img className="img-fluid rounded" src={logo} alt="" />
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

export default Hielipau;
