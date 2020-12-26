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
                            <h1 className="mt-4">Cura deuda digital</h1>
                            {/* Author */}
                            <p className="lead">
                                by
                                <a href="#"> Marco Cobian</a>
                            </p>
                            <hr />
                            <a href="https://app.curadeuda.com/">
                                <img
                                    height="35%"
                                    width="35%"
                                    className="img-fluid rounded"
                                    src="https://www.curadeuda.com/wp-content/uploads/2019/02/logo_curadeuda.png"
                                    alt=""
                                />
                            </a>
                            <hr />
                            {/* Post Content */}
                            <p className="lead">
                                este fue mi primer proyecto que desarrolle como
                                interno en la empresa y en el cual aprendi
                                demasiado ya que lo comenzamos solamente yo y
                                otro desarrollador, lo cual me hizo entrar de
                                lleno en frontend como backend ya que la tareas
                                eran de la dos partes, lo cual reforce mis
                                habilidades en react al trabajar con un
                                framework llamado (next js) y aprender mas de
                                python en el backend con su framework flask,
                                haciendo Api rest que consumiria el front, y
                                todo esto dentro de un ambiente de docker en el
                                cual trabajamos sin dificultades de versiones.
                            </p>
                            <p className="lead">
                                todo esto a nivel de programación pero tambien
                                aprendi cosas nuevas como optimizar y como se
                                maneja la empresa, notar que hace el cliente
                                para mejoras en el software y mucha seguridad y
                                facilidad para el cliente
                            </p>
                        </div>
                        {/* Sidebar Widgets Column */}
                        <div className="col-md-4">
                            {/* Search Widget */}
                            <div className="card my-4">
                                <h5 className="card-header">
                                    Regresar pagina principal
                                </h5>
                                <div className="card-body">
                                    <div className="card text-center">
                                        <button
                                            onClick={() => this.refreshPage()}
                                            className="btn btn-success"
                                            type="button"
                                        >
                                            <FontAwesomeIcon
                                                icon={faRedoAlt}
                                                color="white"
                                            />
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
                                                    <strong>
                                                        python (Flask Api rest)
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        Next js (React)
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong></strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <strong>Mysql</strong>
                                                </li>
                                                <li>
                                                    <strong>Docker</strong>
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
                                    <a href="https://app.curadeuda.com/">
                                        <img
                                            className="img-fluid rounded"
                                            src="https://www.curadeuda.com/wp-content/uploads/2019/02/logo_curadeuda.png"
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

export default Telegram;
