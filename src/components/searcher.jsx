import React, { } from "react";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
    buscador: {
        textAlign: 'right',
        marginRight: 15,
        marginBottom: 10,
        marginTop: 10
    },
});

function Searcher(props) {
    const classes = useStyles();
    return (
        <div className={classes.buscador}>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                variant="outlined"
                style={{ backgroundColor: 'white' }}
                value={props.nameFilters}
                onChange={(e) => props.onChange(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}

export default Searcher;