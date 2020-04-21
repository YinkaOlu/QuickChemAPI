import express from "express"
import { QuickChemServer } from "./QuickChemServer"

const app = new QuickChemServer()
app.start(3000)