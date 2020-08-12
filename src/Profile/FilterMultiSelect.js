import React,{useState} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Container, Grid } from '@material-ui/core';
import UserCard from './UserCard';
const animatedComponents = makeAnimated();
let filterValue=[{ value: '{"field":"age","condition":">=","value":"30"}', label: 'Age>30', color: '#00B8D9', isFixed: true },
{ value: '{"field":"gender","condition":"===","value":"male"}', label: 'Male', color: '#0052CC'},
{ value:'{"field":"salary","condition":">=","value":"20000"}', label: 'Salary<20000', color: '#FF5630', isFixed: true },
{ value: '{"field":"designation","condition":"===","value":"react"}', label: 'React', color: '#FF5630', isFixed: true },
{ value: '{"field":"experience","condition":"===","value":"2"}', label: 'Experience=2yrs', color: '#FF5630', isFixed: true }];



export default function AnimatedMulti() {
  const [filterData,setFilterValue]=React.useState([]);
  const handleSelectChange=(filters)=>{
    setFilterValue(filters)
    localStorage.setItem('filteredVal',JSON.stringify(filters));
  }
  
  return (
      <React.Fragment>
    <Container maxWidth="sm">
    
    <Grid item xs={6} sm={3} md={12}>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={[filterValue[0], filterValue[2]]}
      isMulti
      options={filterValue}
      onChange={handleSelectChange}
    />
    </Grid>
    

    
    </Container>
    
    <Grid item xs={12} sm={12} md={12}>
    <UserCard filter={filterData} />
    </Grid>
    
</React.Fragment>
  );
}