import * as express from 'express';
import { ElementSource } from "../data/ElementSource"

export class ElementsController {
    router: express.Router = express.Router()
    elementSource: ElementSource
    
    constructor(elementSource: ElementSource) {
        this.createRoutes(this.router)
        this.elementSource = elementSource
    }

    private createRoutes(router: express.Router) {
        router.get("/elements", async (req, res) => {
            const elements = this.elementSource.getElements()
            console.log("Elements")
            console.log(elements)
            res.status(200).json(elements)
        })
    }
}