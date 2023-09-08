import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <div className="p-4 bg-slate-600">
        <p className="text-center text-xl text-white">Pokedex</p>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
