import express from 'express'

import type { Express } from 'express'

type Pets = {
  name: string
  species: string
  adopted: boolean
  age: number
}

const pets: Pets[] = [
  { name: 'Pixel', species: 'cat', adopted: true, age: 9 },
  { name: 'Miso', species: 'cat', adopted: true, age: 6 },
  { name: 'Leonard', species: 'dog', adopted: false, age: 7 },
]

const app: Express = express()
const PORT = 8000

//GET
app.get('/', (req, res) => {
  res.json(pets)
})

app.listen(PORT, (): void => {
  console.log(`Listening on port:${PORT}`)
})
