import mongoose from "mongoose"
import ElementModel, { ChemElement } from "./ElementScheme";

export class ElementSource {
    isConnected: boolean

    connect(): Promise<boolean> {
        return new Promise((res, rej) => {
            mongoose.connect('mongodb://yinkaolu:Olu101!!@ds045031.mlab.com:45031/quickchem');
            const db = mongoose.connection
            db.on("error", (err) => {
                rej(err)
                this.isConnected = false
            })
            db.on("open", () => {
                this.isConnected = true
                res(true)
            })

        })
    }
    getElements(): Promise<ChemElement[]> {
        return new Promise((res, rej) => {
            if (this.isConnected) {
                ElementModel.find((err, elements) => {
                    if (err) {
                        rej(err)
                    } else {
                        res(elements)
                    }
                });
            } else {
                rej("Database has not been connected")
            }
        })
    }
}