import { addNewGame, getGameById, getGames } from "../controllers/boredControllers";

const routes = (app) => {
    app.route('/api/addGame')
        .post(addNewGame)
    app.route('/api/game/:gameId')
        .get(getGameById)
        .put(updateGame)
    app.route('/api/games')
        .get(getGames)
}

export default routes;