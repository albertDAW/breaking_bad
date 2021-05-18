import React, { } from "react";
import { makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles({
    buscador: {
        textAlign: 'center',
    },
});

function Searcher(props) {
    const classes = useStyles();
    return (
        <div className={classes.buscador}>
            <TextField placeholder='name' value={props.nameFilters} onChange={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default Searcher;