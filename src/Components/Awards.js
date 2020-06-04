import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAward } from "@fortawesome/free-solid-svg-icons";
//proyects
import Carro from "../proyectos/carro";
import PuntoVenta from '../proyectos/puntoVenta';
import Hielipau from '../proyectos/Heilipau';
//assests of the proyects
import carro1 from '../Assets/carrojap2/uno.jpg';
import pv1 from '../Assets/punto de venta/dospv.png';
import Hieli1 from '../Assets/Hielipau/hielipaulogo.png';


class Awards extends React.Component{
  constructor(props) {
    super(props);
    this.awards = props.awards;
    this.state={
      status: 0
    }
  }

  handleStatus = (select) =>{
    this.setState({
      status: select
    })
  }

  calar = () =>{
    if (parseInt(this.state.status)===1) {
      return <Carro />
    }
    if (parseInt(this.state.status)===2) {
      return <PuntoVenta />
    } 
    if (parseInt(this.state.status)===3) {
      return <Hielipau />
    }     
    else {
      return(
        <div className="container">
          <h2 className="mb-5">Proyectos</h2>
          <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <img src={carro1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Carro bot</h5>
                <p className="card-text">Este fue un proyecto escolar en el cual teniamos que hacer un carro DIY con arduino que recogiera un objeto siguiendo colores</p>
                <button onClick={() => this.handleStatus(1)} className="btn btn-primary">ver</button>                      
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={pv1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Punto de Venta</h5>
                <p className="card-text">Este proyecto es uno de los que mas se a vendido ya que es un punto de venta pequeño y facil de usar para diferentes tipos de negocios</p>                  
                <button onClick={() => this.handleStatus(2)} className="btn btn-primary">ver</button>
              </div>
            </div>
          </div>
            <div className="col mb-4">
              <div className="card">
                <img src={Hieli1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hielipau Inventario</h5>
                  <p className="card-text">Esta es una pagina web para llevar un invetario y guardar ventas de una pequeña tienda colimense</p>
                  <button onClick={() => this.handleStatus(3)} className="btn btn-primary">ver</button>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )      
    }
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        {
          this.calar()
        }
      </section>
    )    
  }


}

export default Awards;
