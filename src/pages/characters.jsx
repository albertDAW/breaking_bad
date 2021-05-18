import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CardCharacter from "../components/card-characters";
import Searcher from "../components/searcher";
import { getCharacters, getCharactersFiltereds } from "../gateways/characters";

const useStyles = makeStyles({
    loader: {
        position: 'fixed',
        left: '50%',
        top: '40%',
    },
});

function Characters() {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [nameFilters, setNameFilters] = useState('');
    const handleLoadCharacters = useCallback(async () => {
        setLoading(true);
        var result = await getCharacters();
        setCharacters(result);
        setLoading(false);
    }, [])

    const handleDetail = useCallback((x)=>{
        history.push('/' + x);
    },[history]);

    const handleFilter = useCallback(async () => {
        var result = await getCharactersFiltereds(nameFilters);
        setCharacters(result);
    }, [nameFilters]);

    const handleSetName = useCallback((x) => {
        setNameFilters(x);
    }, [])

    useEffect(() => {
        handleFilter();
    }, [nameFilters, handleFilter])

    useEffect(() => {
        handleLoadCharacters();
    }, [handleLoadCharacters])
    return (
        <>
            { !loading ?
                <div>
                    <Searcher nameFilters={nameFilters} onChange={handleSetName}/>
                    <Grid container spacing={3}>
                        {
                            characters.map((x, i) => (
                                <Grid item xs={12} md={3} key={`characters_${i}`}>
                                    <CardCharacter character={x} onNavigate={() => handleDetail(x.char_id)} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                :
                <div className={classes.loader}>
                    <CircularProgress size={100} />
                </div>
            }
        </>
    )
}

export default Characters;