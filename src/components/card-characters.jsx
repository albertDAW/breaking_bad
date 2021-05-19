import React, { } from "react";
import { Card, makeStyles } from "@material-ui/core";
import nombres from "../resources/nombres.png";
const useStyles = makeStyles({
    cardMain: {
        backgroundSize: 'cover',
        height: '63vh',
    },
    etiqueta: {
        backgroundSize: 'initial',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'right',
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    span: {
        color: 'white',
        fontSize: '1.5em',
        position: 'absolute',
        bottom: '4%',
        right: '1vh',
        fontFamily: 'sans-serif'
    }
});

function CardCharacter(props) {
    const classes = useStyles();
    return (
        <>
            <Card style={{ backgroundImage: `url(${props.character.img})` }} onClick={props.onNavigate} className={classes.cardMain}>
                <div className={classes.etiqueta} style={{ backgroundImage: `url(${nombres})` }}>
                    <span className={classes.span}>{props.character.name}</span>
                </div>
            </Card>

        </>
    )
}

export default CardCharacter;