import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <div className="p-4 bg-slate-600">
        <Link to="/">
          <p className="text-center text-xl text-white">Pokedex</p>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
