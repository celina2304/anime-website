// Header.jsx
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../redux/userSlice'

const Header = () => {
  // const { isAuthenticated, user } = useSelector((state) => state.user)
  // const dispatch = useDispatch()

  // const handleLogout = () => {
  //   dispatch(logout())
  // }

  return (
    <header className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-500">Sloth</Link>

        {/* <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-300">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
            >
              Login / Register
            </Link>
          )}
        </div> */}
      </div>
    </header>
  )
}

export default Header