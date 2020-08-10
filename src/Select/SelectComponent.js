import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';
import data from './data';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [countryData,setCountry]=React.useState('');
  const [stateData,setStateData]=React.useState('');
  const [cityData,setCity]=React.useState('');
  const [country,setCountryArray]=React.useState(data.Country);
  const [states,setStateArray]=React.useState([]);
  const [city,setCityArray]=React.useState([]);

  const handleChangeCountry = (event) => {
    if(event.target.value){
    setCountry(event.target.value);
    event.target.value && generateStateData(event.target.value);
    
    }
    else{
      setCountry('');
      setStateData('');
      setCity('');
      setStateArray([]);
      setCityArray([])
    }
  };
  const handleChangeCity=(event)=>{
    setCity(event.target.value);
  }
  const generateStateData=(val)=>{
    setStateData('');
    const filteredCountry=country.find(country=>{
      if(country.name==val){
        return country;
      }
   }); 
   const filteredState=data.States.filter(filterState=>{
    if(filterState.country_code===filteredCountry.country_code) {
      return filterState
    }
  });
  filteredState && setCityArray([]);setCity('');
  filteredState && setStateArray(filteredState);
  
  }
  const handleChangeState=(event)=>{
    if(event.target.value){
      setStateData(event.target.value);
    event.target.value && generateCityData(event.target.value);  
    }else{
      setStateData('');
      setCity('');
      setCityArray([])
    }
    
  }
  const generateCityData=(val)=>{
    const filteredState=states.find(filterState=>{
      if(filterState.name===val) {
        return filterState;
      }
    });

    const filteredCity=data.City.filter(city=>{
      if(city.state_code===filteredState.state_code){
        return city;
      }
    });
    filteredCity && setCityArray(filteredCity)
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={12}>
      <Grid item xs={6} sm={3} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={countryData}
          onChange={handleChangeCountry}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {country.map((data, index) =>
            <MenuItem key={data.name} value={data.name} >{data.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6} sm={3} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">States</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={stateData}
          onChange={handleChangeState}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {states.map((data, index) =>
            <MenuItem key={data.name} value={data.name} >{data.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6} sm={3} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={cityData}
          onChange={handleChangeCity}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {city.map((data, index) =>
            <MenuItem key={data.name} value={data.name} >{data.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      </Container>
  );
}
