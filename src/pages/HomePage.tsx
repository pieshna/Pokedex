import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CardProps } from '../interfaces/card'

const HomePage = () => {
  const [pokeData, setPokeData] = useState<CardProps[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data.results)
      })
  }, [offset])

  return (
    <>
      {pokeData.map((pokemon: CardProps) => (
        <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </>
  )
}

export default HomePage
