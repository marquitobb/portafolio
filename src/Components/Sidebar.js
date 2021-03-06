import React, { Component } from 'react';
//import image from '../Assets/mc.jpg';
import image from '../Assets/dos.jpg';


class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }

  

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Educacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Herramientas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Intereses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#cv">Descargar CV</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
