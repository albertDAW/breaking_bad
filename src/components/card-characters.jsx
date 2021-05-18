import React, { } from "react";
import { Card, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    cardMain: {
        display: 'flex'
    },
    item: {
        flex: 1,
        height: 400
    },
    foto: {
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        marginBottom: -4
    }
});

function CardCharacter(props) {
    const classes = useStyles();
    return (
        <Card onClick={props.onNavigate} className={classes.cardMain}>
            <div className={classes.item}>
                <img alt={`foto character ${props.character.name}`} className={classes.foto} src={props.character.img} />

            </div>
            <div className={classes.item}>
                {props.character.name}
            </div>
        </Card>
    )
}

export default CardCharacter;