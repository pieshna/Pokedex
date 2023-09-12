import { Pokedex } from '../interfaces/pokemon'
import { useEffect } from 'react'

const DetailsPokemon = ({ pokemon }: { pokemon: Pokedex }) => {
  useEffect(() => {
    window.history.replaceState(null, '', `/pokemon/${pokemon.id}`)
  }, [pokemon])

  return (
    <div>
      DetailsPokemon
      {JSON.stringify(pokemon)}
    </div>
  )
}

export default DetailsPokemon
