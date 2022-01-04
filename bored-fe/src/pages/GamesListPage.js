import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGames from "../components/ListGames";

const GamesListPage = () => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/games')
            .then( (response) => {
                setGamesList(response.data)
            })
    }, []);

    return(
        <>
            <h1>All the best games</h1>
            <ListGames gamesList={gamesList} />
        </>
    )
}

export default GamesListPage;