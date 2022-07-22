import express, { Response } from 'express'
import cors from 'cors'

export const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (res: Response) => {

    res.status(200).send({alive: true})
})
