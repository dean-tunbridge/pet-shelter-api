import express from 'express'

import type { Express } from 'express'

type Pets = {
  name: string
  species: string
  adopted: boolean
  age: number
}

const pet: Pets = { name: 'Pixel', species: 'cat', adopted: true, age: 9 }

const app: Express = express()
const PORT = 8000

//GET
app.get('/', (req, res) => {
  res.json(pet)
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
