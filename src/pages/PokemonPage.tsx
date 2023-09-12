import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Pokedex } from '../interfaces/pokemon'
import DetailsPokemon from '../components/DetailsPokemon'

const PokemonPage = () => {
  const { id } = useParams()

  const [pokemon, setPokemon] = useState<Pokedex | null>(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
      })
  }, [id])

  return <>{pokemon && <DetailsPokemon pokemon={pokemon} />}</>
}

export default PokemonPage
