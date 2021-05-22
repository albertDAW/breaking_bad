import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router";
import { useTranslation } from 'react-i18next';
import { getCharacterById, getCharacterQuote } from "../gateways/characters";

const useStyles = makeStyles({
    loader: {
        position: 'fixed',
        left: '50%',
        top: '40%',
    },
    main: {
        padding: 15,
        paddingLeft: 35,
    },
    flex: {
        display: 'flex'
    },
    link: {
        flex: 1,
        marginBottom: 10
    },
    detail: {
        flex: 0.65
    },
    img: {
        maxHeight: 700
    },
    containerImage: {
        flex: 0.35,
        width: 0
    },
    quoteRow: {
        display: 'flex',
    },
    autoFlex: {
        flex: 1
    },
    button: {
        marginTop: 15
    }
});

function Detail() {
    const history = useHistory();
    const classes = useStyles();
    const { t } = useTranslation();
    const id = useMemo(() => history.location.pathname.replace('/', ''), [history.location.pathname])
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState('');
    const handleLoadCharacter = useCallback(async () => {
        setLoading(true);
        var result = await getCharacterById(id);
        var quoteRandom = await getCharacterQuote(result?.name);
        setQuote(quoteRandom?.quote);
        setCharacter(result);
        setLoading(false);
    }, [id])

    const handleGiveMeRandomQuote = useCallback(async () => {
        var quoteRandom = await getCharacterQuote(character.name);
        setQuote(quoteRandom?.quote);
    }, [character])

    useEffect(() => {
        handleLoadCharacter(id);
    }, [handleLoadCharacter, id])
    return (
        <>
            { !loading
                ?
                <div className={classes.main}>
                    <div className={classes.flex}>
                        <a className={classes.link} href="/">{t('global:volver')}</a>
                    </div>
                    <div className={classes.flex}>
                        <div className={classes.containerImage}>
                            <img className={classes.img} src={character.img} alt="imagen del personaje" />
                        </div>
                        <div className={classes.detail}>
                            {(quote !== '' && quote !== undefined) &&
                                <div className={classes.quoteRow}>
                                    <h3 className={classes.autoFlex}>"{quote}"</h3>
                                    <div>
                                        <Button className={classes.button} variant="contained" color="primary" onClick={handleGiveMeRandomQuote}>{t('global:diTuFrase')}</Button>
                                    </div>
                                </div>
                            }
                            <div className={classes.quoteRow}>
                                <span>{t('character:nombre')}:</span>
                                <b>&nbsp;{character.name}</b>
                            </div>
                            <div className={classes.quoteRow}>
                                <span>{t('character:cumpleaños')}:</span>
                                <b>&nbsp;{character.birthday}</b>
                            </div>
                            <div className={classes.quoteRow}>
                                <span>{t('character:estado')}:</span>
                                <b>&nbsp;{t('estados:' + character.status)}</b>
                            </div>
                            <div className={classes.quoteRow}>
                                <span>{t('character:apodo')}:</span>
                                <b>&nbsp;{character.nickname}</b>
                            </div>
                            <div className={classes.quoteRow}>
                                <span>{t('character:actor')}:</span>
                                <b>&nbsp;{character.portrayed}</b>
                            </div>
                            {
                                character.occupation && character.occupation.length > 0 &&
                                <div className={classes.quoteRow}>
                                    <span>{t('character:profesion')}:</span>
                                    <b>&nbsp;{character.occupation.toString()}</b>
                                </div>
                            }
                            {
                                character.appearance && character.appearance.length > 0 &&
                                <div className={classes.quoteRow}>
                                    <span>{t('character:aparicion')}:</span>
                                    {character.appearance.map((x, i) => (
                                        <b key={`aparicion_${i}`}>&nbsp;{`${t('global:temporada')} ${x}`}</b>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                :
                <div className={classes.loader}>
                    <CircularProgress size={100} />
                </div>
            }
        </>

    )
}

export default Detail;