import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const names = [
    {
        name:"India",
        country_code:"IN"
    },
    {
        name:"Australia",
        country_code:"AU"
    },
    {
        name:"Indonesia",
        country_code:"ID"
    },
    {
        name:"New Zealand",
        country_code:"NZ"
    },
    {
        name:"Nigeria",
        country_code:"NG"
    },
    {
        name:"United States",
        country_code:"US"
    },
    
    {
        name:"Lebanon",
        country_code:"LB"
    },
];


export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select multiple value={personName} onChange={handleChange}>
          {names.map((name) => (
            <MenuItem key={name.name} value={name.name}>
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
