import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const arr=[1,2,3,4]

  return(
      <div>
        {arr.map((item)=>{return(
            <Grid container spacing={3}>
    <Grid item xs={3}>
            <div className="theContainer">
            <div className="theCard">
                <div className="theFront">
                    Meditation
                </div>
                </div>
                </div>
                </Grid>
        </Grid>
        )})}
        </div>
  )
}
