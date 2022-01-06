import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowGameInfo from "../components/ShowGameInfo";
import { useParams } from "react-router-dom";

const GameInfoPage = () => {
    // Grabs the URL parameter set up in the React Router link to this page
    // This is the object { gameId: URL Paramter } and is assigned to the const gameId
    const gameIdObject = useParams()
    const gameId = gameIdObject.gameId;

    const [currentGame, setCurrentGame] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/game/${gameId}`)
            .then((response) => {
                setCurrentGame(response.data)
            })
    }, [gameId]);

    return(
        <>
            <h1>{currentGame.title}</h1>
            <ul>
                <li>Author: {currentGame.author}</li>
                <li>Publisher: {currentGame.publisher}</li>
                <li>Players: {currentGame.minPlayers} - {currentGame.maxPlayers}</li>
                <li>Playtime: {currentGame.minPlayTime} minutes</li>
                <li>Ages: {currentGame.playerAges}+</li>
                <li>Number of plays: {currentGame.numberOfPlays}</li>
            </ul>
        </>
    )
}

export default GameInfoPage;