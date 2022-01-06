import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowGameInfo from "../components/ShowGameInfo";
import { useParams } from "react-router-dom";

const GameInfoPage = () => {
    // Grabs the URL parameter set up in the React Router link to this page
    // This is the object { gameId: URL Paramter } and is assigned to the const gameId
    const gameId = useParams()

    return(
        <>
            <h1>Game</h1>
            <h2>Title: {gameId.gameId}</h2>
        </>
    )
}

export default GameInfoPage;