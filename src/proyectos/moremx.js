/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import mx1 from "../Assets/moremxApp/mx1.gif";
import back1 from "../Assets/moremxApp/backteam.png";
import back2 from "../Assets/moremxApp/back2.png";
import logo from "../Assets/moremxApp/more.jpg";

class MoreMx extends React.Component {
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
              <h1 className="mt-4">App Morena Mexicana</h1>
              {/* Author */}
              <p className="lead">
                by
                <a href="#"> Marco Cobian</a>
              </p>
              <hr />
              <img
                position="relative"
                left="40%"
                width="250px"
                height="150px"
                className="img-fluid rounded"
                src={mx1}
                alt=""
              />
              <hr />
              {/* Post Content */}
              <p className="lead">
                Esta es una app móvil que actualmente se encuentra en desarrollo
                ya que tenemos un equipo de ex compañeros que estamos vía remota
                cada quien ocupado con sus proyectos y esto lo desarrollamos en
                nuestros ratos libres, pero solo en la parte del backend es
                donde trabajamos juntos ya que estamos creando una buena rest
                api con todos los servicios de usuarios, productos y un método
                que permita hacer compras con tarjetas.
              </p>
              <hr />
              <h5>Herramientas para trabajar en equipo utilizadas bajo la metodologia Scrum</h5>
              <div className="row">                
                <img
                  position="relative"
                  left="40%"
                  width="500px"
                  height="300px"
                  className="img-fluid rounded"
                  src={back1}
                  alt=""
                />
                <img
                  position="relative"
                  left="40%"
                  width="500px"
                  height="300px"
                  className="img-fluid rounded"
                  src={back2}
                  alt=""
                />
              </div>
              <hr />
              <p className="lead">
                En la parte del front que es con lo que se desarrolla la app
                móvil cabe resaltar que no fue una app común para Android si no
                una app híbrida para Android y IOS desarrollada con el framework
                de google Flutter y su lenguaje Dart, ya que la microempresa que
                lo solicitaba decía que la mayoría de clientas usaban más el SO
                IOS de apple y una minoría Android asi que desarrollar dos
                diferentes códigos sería más costoso y complicado entonces
                decidí hacerlo en Flutter ya que es parecido a javascript y me
                pareció por varias cosas que no mencionó mejor que react native
                y recalcar que la parte del front o de la aplicación únicamente
                es desarrollada por mi, por lo que por eso la incluyo en mi
                portafolio.                
              </p>
              <hr/>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8s4773rfzRY"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>              
              <hr />
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
                          <strong>jwt</strong>
                        </li>
                        <li>
                            <strong>Nodejs</strong>
                        </li>
                        <li>
                            <strong>mongodb</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                            <strong>Flutter</strong>
                        </li>
                        <li>
                            <strong>Dart</strong>
                        </li>
                        <li>
                            <strong>Firebase</strong>
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
                  <img className="img-fluid rounded" src={logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreMx;
