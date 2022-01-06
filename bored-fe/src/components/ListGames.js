import React from "react";

const ListGames = ({ gamesList }) => {
    const gamesListArray = gamesList;
    return(
        <ul>
            {gamesListArray.map((game) => {
                let title = game.title
                return(
                    <li key={game._id}>{title}</li>
                )
            })}
        </ul>
    )
}

export default ListGames;