import express from "express"
import { ElementSource } from "../data/ElementSource"

export class ElementsController {
    router: express.Router = express.Router()
    elementSource: ElementSource
    constructor(elementSource: ElementSource) {
        this.createRoutes(this.router)
        this.elementSource = elementSource
        this.elementSource.connect()
    }

    private createRoutes(router: express.Router) {
        router.get("/elements", async (req, res) => {
            try {
                const elements = await this.elementSource.getElements()
                res.status(200).json(elements)
            } catch(err) {
                res.status(400).json(err)
            }

        })
    }
}