import { Grid } from "@material-ui/core";
import React from "react";
import SpacingGrid from "./layout";

import Charts from "./chart";
import CheckList from "./list";


function Dashboard(){
    return(
        <div>
            <Grid>
                <h1> Dashboard</h1>
            </Grid>
            <Grid>
                <SpacingGrid />
            </Grid>
        </div>
    )
}

export default Dashboard