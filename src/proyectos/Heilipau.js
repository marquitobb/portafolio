/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faLinkedin, faInstagram,  faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faRedoAlt} from "@fortawesome/free-solid-svg-icons";
import hieli1 from "../Assets/Hielipau/hieli1.png";
import logo from "../Assets/Hielipau/hielipaulogo.png";

class Hielipau extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    

    refreshPage = () =>{
        window.location.reload();
    }

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
                <img
                    className="img-fluid rounded"
                    src={hieli1}
                    alt=""
                />
                <hr />
                {/* Post Content */}
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                    quibusdam sit excepturi nam quia corporis eligendi eos magni
                    recusandae laborum minus inventore?
                </p>
                <hr/>
                <h4>video ya usando el software nuestro cliente</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NpmUDyFTGtM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                    tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
                    impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                    Temporibus, voluptatibus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                    doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                    neque dicta incidunt ullam ea hic porro optio ratione repellat
                    perspiciatis. Enim, iure!
                </p>
                <blockquote className="blockquote">
                    <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                    nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                    commodi nihil ullam alias modi dicta saepe minima ab quo
                    voluptatem obcaecati?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                    dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                    quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                    recusandae? Qui, necessitatibus, est!
                </p>
                <hr />
                </div>
                {/* Sidebar Widgets Column */}
                <div className="col-md-4">
                {/* Search Widget */}
                <div className="card my-4">
                    <h5 className="card-header">Regresar pagina principal</h5>
                    <div className="card-body">                   
                    <div className="card text-center">
                        <button onClick={() => this.refreshPage()} className="btn btn-success" type="button">
                            <FontAwesomeIcon icon={faRedoAlt} color="white" />
                        </button>
                    </div>
                    </div>
                </div>
                {/* Categories Widget */}
                <div className="card my-4">
                    <h5 className="card-header">Leguajes y librerias para su desarrollo</h5>
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
                            <a href="#">Freebies</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#">JavaScript</a>
                            </li>
                            <li>
                            <a href="#">CSS</a>
                            </li>
                            <li>
                            <a href="#">Tutorials</a>
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
                            <img
                                className="img-fluid rounded"
                                src={logo}
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

export default Hielipau;
