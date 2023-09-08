import { useState, useEffect } from 'react'
import { CardProps } from '../interfaces/card'
import { Pokedex } from '../interfaces/pokemon'

const Card = ({ name, url }: CardProps) => {
  const [pokeData, setPokeData] = useState<Pokedex>()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data)
      })
  }, [url])

  const setImage = () => {
    return pokeData?.sprites.other?.home.front_default
  }

  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={setImage()} alt={name} />
        </div>
        <div className="card__name">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  )
}

export default Card
