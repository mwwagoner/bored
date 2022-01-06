import React from "react";
import { Link } from "react-router-dom";

const ListGames = ({ gamesList }) => {
    const gamesListArray = gamesList;
    return(
        <ul>
            {gamesListArray.map((game) => {
                let title = game.title
                return(
                    <li key={game._id}>
                        <Link to={`/games/${game._id}`}>{title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListGames;