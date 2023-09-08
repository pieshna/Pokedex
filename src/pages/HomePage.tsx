import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CardProps, resultsPokemon } from '../interfaces/card'

const HomePage = () => {
  const [pokeData, setPokeData] = useState<CardProps>({} as CardProps)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setPokeData({ count: data.count, results: data.results })
      })
  }, [offset])

  return (
    <>
      <p className="p-4 text-xl text-gray-700">
        Registered: {pokeData.count} Pokemon.
      </p>
      <div className="grid lg:grid-cols-3 px-5 py-3 md:grid-cols-2 sm:grid-cols-1">
        {pokeData?.results?.map((pokemon: resultsPokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
      <div className="flex justify-center">
        {offset != 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={() => setOffset(offset - 6)}
          >
            Previous
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={() => setOffset(offset + 6)}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default HomePage
