import { addNewGame, getGameById, getGames, updateGameById, deleteGameById } from "../controllers/boredControllers";

const routes = (app) => {
    app.route('/api/addGame')
        .post(addNewGame)
    app.route('/api/game/:gameId')
        .get(getGameById)
        .put(updateGameById)
        .delete(deleteGameById)
    app.route('/api/games')
        .get(getGames)
}

export default routes;