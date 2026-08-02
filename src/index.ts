import express from 'express'

import type { Express } from 'express'
import { pets } from './data/pets'
const app: Express = express()
const PORT = 8000

//GET
app.get('/', (req, res) => {
  res.json(pets)
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
