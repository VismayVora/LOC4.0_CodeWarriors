import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Charts from './chart';
import Paper from '@material-ui/core/Paper';
import CheckList from './list';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  paper: {
    // height: 300,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
      <div>

    <Grid container className={classes.root} spacing={2}>
        
      <Grid item xs={12} >
        <Grid container justifyContent="center" spacing={spacing} >
          {[{0:< Charts />},{1: < CheckList/>}].map((value) => (
            <Grid key={value} item >

              <Paper className={classes.paper} >
                <div>{Object.values(value)}</div>
              </Paper>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>
    </div>
  );
}