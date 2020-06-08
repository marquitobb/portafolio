import React, { Component } from 'react';
import tec from "../Assets/teclogo.gif";

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Educacion</h2>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.university}</h3>
                  <div className="subheading mb-3">{data.degree}</div>
                  <p>{data.gpa}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                  <br></br>
                  <br></br>
                  <img width="250px" height="150px" src={tec} alt='...' />
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Education;
