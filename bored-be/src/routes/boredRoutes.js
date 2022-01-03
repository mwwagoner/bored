import { addNewGame } from "../controllers/boredControllers";

const routes = (app) => {
    app.route('/api/addGame')
        .post(addNewGame)
}

export default routes;