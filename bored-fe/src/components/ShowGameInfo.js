import React from "react";

const ShowGameInfo = (props) => {

    return(
        <>
            <h2>{props.currentGame.title}</h2>
            <ul>
                <li>Author: {props.currentGame.author}</li>
                <li>Publisher: {props.currentGame.publisher}</li>
                <li>Players: {props.currentGame.minPlayers} - {props.currentGame.maxPlayers}</li>
                <li>Playtime: {props.currentGame.minPlayTime} minutes</li>
                <li>Ages: {props.currentGame.playerAges}+</li>
                <li>Number of plays: {props.currentGame.numberOfPlays}</li>
            </ul>
        </>
    )
}

export default ShowGameInfo;