export type Pets = {
  name: string
  species: string
  adopted: boolean
  age: number
}

export const pets: Pets[] = [
  { name: 'Pixel', species: 'cat', adopted: true, age: 9 },
  { name: 'Miso', species: 'cat', adopted: true, age: 6 },
  { name: 'Leonard', species: 'dog', adopted: false, age: 7 },
]
