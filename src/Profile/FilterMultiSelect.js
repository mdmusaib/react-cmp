import React,{useState,useEffect} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Container, Grid } from '@material-ui/core';
import UserCard from './UserCard';
const animatedComponents = makeAnimated();
let filterValue=[{ id:1,value: '{"field":"age","condition":"<=","value":"30"}', label: 'Age<30', color: '#00B8D9', isFixed: true },
{id:2, value: '{"field":"gender","condition":"===","value":"male"}', label: 'Male', color: '#0052CC'},
{ id:3,value:'{"field":"salary","condition":"<=","value":"20000"}', label: 'Salary<20000', color: '#FF5630', isFixed: true },
{ id:4,value: '{"field":"designation","condition":"===","value":"react"}', label: 'React', color: '#FF5630', isFixed: true },
{ id:5,value: '{"field":"experience","condition":"===","value":"2"}', label: 'Experience=2yrs', color: '#FF5630', isFixed: true }];



export default function AnimatedMulti() {
  const [filterData,setFilterValue]=React.useState([]);
  const [historyFilter,setHistoryFilter]=React.useState([]);
  const [reset,setReset]=React.useState(false);
  
  const handleSelectChange=(filters)=>{
    if(filters===null){
      setReset(true);
      setHistoryFilter([])
    }
    setHistoryFilter(filters)
    setFilterValue(filters)
    if(reset===true) setReset(false)
    localStorage.setItem('filteredVal',JSON.stringify(filters));
  }
  useEffect(()=>{
    let history=JSON.parse(localStorage.getItem('filteredVal'));
    let historyArray=[];
    if(history!==null){
      
      history.map(filterId=>{
        filterValue.filter(userId=>{
          if(userId.id === filterId.id){
            historyArray.push(userId); 
          }
        })
      })
      setHistoryFilter(historyArray)
    }
    
  },[]);
  return (
      <React.Fragment>
    <Container maxWidth="sm">
    
    <Grid item xs={6} sm={3} md={12}>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      value={historyFilter}
      isClearable={false}
      isMulti
      options={filterValue}
      onChange={handleSelectChange}
    />
    </Grid>
    

    
    </Container>
    
    <Grid item xs={12} sm={12} md={12}>
    <UserCard filter={filterData} reset={reset}/>
    </Grid>
    
</React.Fragment>
  );
}