import React, { Component } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import data from '../Select/data';
class MultiSelect extends Component{
  constructor(props){
    super(props);
    this.state={
      groupState:[]
    }
  }
  componentDidMount(){
    this.setState({
      groupState:data.continentGroup
    })
  }

  render(){
    return(
<Multiselect
              options={this.state.groupState}
              displayValue="country"
              groupBy="continent"
              showCheckbox={false}
            />
    );

  }
}
export default MultiSelect;