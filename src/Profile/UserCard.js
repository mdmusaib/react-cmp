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
        userData:[{name:"user1",age:"30",gender:"male",salary:"10000",designation:"react",experience:2},
        {name:"user2",age:"20",gender:"male",salary:"60000",designation:"engineer",experience:6},
        {name:"user3",age:"14",gender:"male",salary:"90000",designation:"admin"},
        {name:"user4",age:"35",gender:"male",salary:"100000",designation:"it",experience:2}],
      }
    }
    componentDidMount(){
      let historyFilter=JSON.parse(localStorage.getItem('filteredVal'));
      if(historyFilter!==null){
       this.filterData(historyFilter); 
      }

    }
    componentDidUpdate(prevState,prevProps){
      if(this.props.filter && this.props.filter.length>0 && this.props.filter!==prevState.filter){
        console.log('filterData',this.props.filter)
        this.filterData(this.props.filter);
      }
      if(this.props.reset && prevState.reset!==this.props.reset){
        console.log('called')
        this.setState({
          userData:[{name:"user1",age:"30",gender:"male",salary:"10000",designation:"react",experience:2},
          {name:"user2",age:"20",gender:"male",salary:"60000",designation:"engineer",experience:6},
          {name:"user3",age:"14",gender:"male",salary:"90000",designation:"admin"},
          {name:"user4",age:"35",gender:"male",salary:"100000",designation:"it",experience:2}],
        });
      }
    }

    filterData=(data)=>{
      let filterArr=[];
      let tempUserArray = this.state.userData;
      let filteredArr=[];
      data.map(filterVal=>{
        filterArr.push(JSON.parse(filterVal.value))
      });
      if(filterArr){      
        filterArr.forEach((filter)=>{
	      tempUserArray.filter((user)=>{ 
    	  if("'"+user[filter.field]+"'" && eval('"'+user[filter.field]+'"' +filter.condition +  '"' + filter.value+ '"')){
          filteredArr.push(user);
        }
    });
    tempUserArray=[];
    tempUserArray=filteredArr;
    filteredArr=[];
    });
      }
       this.setState({
      userData:tempUserArray
    },()=>{
      console.log('filtered',this.state.userData,tempUserArray)
    });
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
