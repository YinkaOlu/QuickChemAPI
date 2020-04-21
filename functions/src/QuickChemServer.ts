import express from 'express';
import { ElementsController } from "./controller/ElementsController"
import { ElementSource } from "./data/ElementSource"
import bodyParser = require('body-parser');

export class QuickChemServer {
    app = express()
    private API_PREFIX = "/api/v1"
    private elementsController: ElementsController
    constructor() {
        const elementSource = new ElementSource()
        this.elementsController = new ElementsController(elementSource)

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.setUpRoutes(this.app)
    }

    start(port: number) {
        this.app.listen(port, () => {
            // console.log(`Listening on port: ${port}`)
        })
    }

    private setUpRoutes(app: express.Application) {
        app.use(this.API_PREFIX, this.elementsController.router)
    }
}