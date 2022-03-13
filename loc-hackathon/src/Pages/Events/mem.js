import { CardMembership } from "@mui/icons-material"
import React from "react"
import { useState } from "react"
import { Button, TextField } from "@mui/material"


export default function  Members() {
    const [num,setNum]=useState()
    return(
        <div>
            Hello
            <TextField
												
												label="Number of members"
												sx={{ width: "180px", marginLeft: "40px" }}
												value={num}
												onChange={(e)=>{setNum(e.target.value)}}
											></TextField>
                                            <Button>Submit</Button>

        </div>
    )
    }