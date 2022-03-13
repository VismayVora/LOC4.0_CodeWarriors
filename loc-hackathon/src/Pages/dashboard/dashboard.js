import { Grid } from "@material-ui/core";
import React from "react";
import SpacingGrid from "./layout";

import Charts from "./chart";
import CheckList from "./list";
import Box from '@material-ui/core/Box';



function Dashboard(){
    return(
        <div>
            <Box bgcolor="text.disabled" color="background.paper" p={2}>
                <Grid>
                    <h1> Dashboard</h1>
                </Grid>
                <Grid>
                    <SpacingGrid />
                </Grid>
            </Box>
        </div>
    )
}

export default Dashboard