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
            <h1>Game Info</h1>
            <ShowGameInfo currentGame={currentGame} />
        </>
    )
}

export default GameInfoPage;