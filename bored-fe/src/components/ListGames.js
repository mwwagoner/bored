import React from "react";

const ListGames = ({ gamesList }) => {
    const gamesListArray = gamesList;
    return(
        <>
            {gamesListArray.map((game) => {
                let title = game.title
                return(
                    <p>{title}</p>
                )
            })}
        </>
    )
}

export default ListGames;