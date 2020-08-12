import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

  class  UserCard extends Component{
    constructor(props){
      super(props);
      this.state={
        userData:[]
      }
    }
    componentDidMount(){
      this.setState({
        userData:[{name:"Mohammed",age:"30",gender:"male",salary:"10000",designation:"react",experience:2},
        {name:"Mohammed MAAZ",age:"20",gender:"male",salary:"60000",designation:"Engineer"},
        {name:"Mohammed UZAIR",age:"14",gender:"male",salary:"90000",designation:"software Engineer"},
        {name:"Mohammed Saad",age:"35",gender:"male",salary:"100000",designation:"IT",experience:2}],
      });
    }
    componentDidUpdate(prevState,prevProps){
      if(this.props.filter && this.props.filter.length>0 && this.props.filter!==prevState.filter){
        // console.log(this.props.filter)
        this.filterData(this.props.filter);
      }
    }

    filterData=(data)=>{
      console.log('filterData')
      let filterArr=[];
      let tempUserArray = this.state.userData;
      let filteredArr=[];
      data.map(filterVal=>{
        filterArr.push(JSON.parse(filterVal.value))
      });
      
      if(filterArr){      
        filterArr.forEach((filter)=>{
	      tempUserArray.filter((user)=>{ 
    	  if(user[filter.field] && eval('"'+user[filter.field]+'"' +filter.condition +  '"' + filter.value+ '"')){
          filteredArr.push(user);
        }
    });
    tempUserArray=[];
    tempUserArray=filteredArr;
    });
    console.log(filteredArr)
      }
       this.setState({
      userData:tempUserArray
    });
    console.log(tempUserArray)
    }
  render(){
    return (
      <React.Fragment>
        <Grid container  spacing={3}>
        {this.state.userData.map(user=>{
         return (
          
          <Grid item xs={12} sm={12} md={2} spacing={3} style={{margin:'40px'}}>
           <Card style={{maxWidth:'275px'}}>
            <CardContent>
            <Typography variant="h5" component="h3">
            {user.name}
        </Typography>      
            <Typography  color="textSecondary">
                Designation {user.designation}
              </Typography>
              <Typography variant="body2" component="p">
              Gender {user.gender}
        </Typography>
              <Typography variant="body2" component="p">
              Salary {user.salary}
        </Typography>
        <Typography variant="body2" component="p">
              Age {user.age}
        </Typography>
            </CardContent>
          </Card>
          </Grid>
          
         );
        })
      }
      </Grid>
      </React.Fragment>
    
  );
  }
    
  }  
  export default UserCard;
