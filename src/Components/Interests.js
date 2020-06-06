import React, { Component } from "react";

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Intereses</h2>
          <p>
            Tengo 23 años y me gusta mucho jugar futbol ya que es algo que me
            distrae mucho de problemas o estrés, actualmente solo juego dos o
            tres veces por semana, pero es algo que me apasiona casi tanto como
            programar
          </p>
          <p>
            También me gusta mucho ver tutoriales de nuevos lenguajes o
            frameworks de programación como lo fue el caso de deno que me gusto
            mucho la mejora de la versión 1.0, pero ver series de netflix la
            verdad casi no me gusta porque siento que pierdo tiempo cuando puedo
            aprovechar para desarrollar algo o aprender algo nuevo.
          </p>
          <p>
            disfruto tambien salir con mi familia como a la playa o fuera ya que
            me gusta mucho tener compañía de alguien o estar conviviendo.
          </p>
          <p>
            otro interés que tengo personal es crecer en el mundo del desarrollo
            web y móvil dependiendo el rol que lleve en alguna empresa y
            convertirme en un <strong>full stack senior</strong>
          </p>
          <p className="mb-0"></p>
        </div>
      </section>
    );
    
  }
}

export default Interests;
