import React from 'react';
import Carro from "../proyectos/carro";
import carro1 from '../Assets/carrojap2/uno.jpg';
import pv1 from '../Assets/punto de venta/dospv.png';

class Proyectos extends React.Component{
    constructor(props) {
      super(props);
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
        return <h1>todavia no disponible</h1>
      } else {
        return(
          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div className="w-100">
              <h2 className="mb-5">Proyectos</h2>
              <div className="row row-cols-1 row-cols-md-2">
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
          </section>
        );
      }
    }

    render() {
      return (
        <div>
          {
            this.calar()
          }
        </div>
      )    
    }
}

export default Proyectos;