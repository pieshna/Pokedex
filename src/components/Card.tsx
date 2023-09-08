import { useState, useEffect } from 'react'
import { resultsPokemon } from '../interfaces/card'
import { Pokedex } from '../interfaces/pokemon'

const Card = ({ name, url }: resultsPokemon) => {
  const [pokeData, setPokeData] = useState<Pokedex>()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data)
      })
  }, [url])

  const setImage = () => {
    return (
      pokeData?.sprites.other?.home.front_default ||
      pokeData?.sprites.other?.['official-artwork'].front_default
    )
  }

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg m-4 h-52 cursor-pointer">
        <p className="p-2 absolute text-xl text-gray-600">#{pokeData?.id}</p>
        <div className="flex justify-center h-40">
          <img src={setImage()} alt={name} />
        </div>
        <div className="mt-2 border">
          <p className="text-gray-700 text-xl text-center">{pokeData?.name}</p>
        </div>
      </div>
    </>
  )
}

export default Card
