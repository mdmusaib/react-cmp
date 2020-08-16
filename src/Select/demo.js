import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  const [countryData,setCountry]=React.useState([]);
  const [stateData,setStateData]=React.useState([]);
  const [cityData,setCity]=React.useState([]);
  const [country,setCountryArray]=React.useState([]);
  const [states,setStateArray]=React.useState([]);
  const [city,setCityArray]=React.useState([]);

  const handleChangeCountry = (event) => {
    if(event.target.value){
    setCountry(event.target.value);
    // event.target.value && generateStateData(value);
    }
    else{
      setCountry([]);
      setStateData([]);
      setCity([]);
      setStateArray([]);
      setCityArray([])
    }
  };
  useEffect(() => {
    generateStateData(countryData);
  }, [countryData]);

  useEffect(() => {
    setCountryArray(data.Country);
  }, []);
  const handleChangeCity=(event)=>{
    setCity(event.target.value);
  }
  const generateStateData=(countryArr)=>{
    setStateData([]);
    const filteredCountryArr=[];
    const filteredCountry=country.filter(country=>{
      countryArr.filter(countArr=>{
        console.log(countArr,country)
        if(country.name===countArr){
          filteredCountryArr.push(country);
        }
      });
      
   });
   console.log(filteredCountryArr) 
   const filteredStateArr=[];
   const filteredState=data.States.filter(filterState=>{
    filteredCountryArr.filter(filtCountryArr=>{
      if(filterState.country_code===filtCountryArr.country_code) {
        filteredStateArr.push(filterState);
      }
    })
  });
  filteredStateArr.length>0 && setCityArray([]);setCity('');
  filteredStateArr.length>0 && setStateArray(filteredStateArr);
  
  }
  const handleChangeState=(event)=>{
    if(event.target.value){
      // !stateData.includes(event.target.value) &&
      setStateData(event.target.value);
    // event.target.value && generateCityData(event.target.value);  
    }else{
      setStateData([]);
      setCity([]);
      setCityArray([])
    }
    
  }

  useEffect(() => {
    generateCityData(stateData);
  }, [stateData]);


  const generateCityData=(cityVal)=>{
    const filteredStateArr=[];
    const filteredState=states.filter(filterState=>{
      cityVal.filter(city=>{
        if(filterState.name===city) {
          filteredStateArr.push(filterState);
        }
      })
    });

    const filteredCityArr=[];
    const filteredCity=data.City.filter(city=>{

      filteredStateArr.filter(filtrState=>{

        if(city.state_code===filtrState.state_code){
          filteredCityArr.push(city);
        }
      })
    });
    filteredCityArr.length>0 && setCityArray(filteredCityArr)
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={12}>
      <Grid item xs={6} sm={3} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
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
          multiple
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
          multiple
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
