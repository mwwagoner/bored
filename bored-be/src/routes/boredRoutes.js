import { addNewGame, getGameById } from "../controllers/boredControllers";

const routes = (app) => {
    app.route('/api/addGame')
        .post(addNewGame)
    app.route('/api/game/:gameId')
        .get(getGameById)
}

export default routes;