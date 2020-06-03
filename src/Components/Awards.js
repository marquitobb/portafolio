import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAward } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter,Switch,Route } from "react-router-dom";
import Carro from "../proyectos/carro";
import NotFound from "../Notfound";
import Proyectos from "./Proyectos";

/*
class Awards extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      select: ''
    }
  }
  
  handleSelect = () =>{

  }


  render() {
    return (
      <div>
        <SelectProyect 
        select={this.state.select}
        />
      </div>
    );
  }
}

const SelectProyect = (props) =>{
  let status = props.select
  switch (status) {
    case 'carro':
      return <Carro />;
    default:
      return <Proyectos />;
  }
}
*/

const Awards = () => (
    <BrowserRouter>    
      <Switch>
          <Route exact path="/" component={Proyectos} />                          
          <Route exact path="/carro" component={Carro} />                          
          <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
)

export default Awards;
