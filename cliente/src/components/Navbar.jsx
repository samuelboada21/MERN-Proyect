import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import { logoutRequest } from "../api/auth";

function Navbar() {
  const navigate = useNavigate();

  const { isAuthenticated, logout, user } = useAuth();
  const buttonClass =
    "bg-gradient-to-b from-fuchsia-600 to-purple-500 hover:from-yellow-600 hover:to-pink-400 py-1.5 rounded-sm  text-white";

  return (
    <nav className="bg-zinc-700 my-3 sm:flex items-center justify-between py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="sm:flex gap-x-2 items-center">
        {isAuthenticated ? (
          <>
            <li className="sm:pt-0 pt-2 font-semibold  text-white">Welcome {user.username}</li>
            <li className="sm:py-0 py-5">
              <button
                className={`${buttonClass} px-4 whitespace-nowrap`}
                onClick={() => navigate("/add-task")}
              >
                Add Task
              </button>
            </li>
            <li>
              <button onClick={() =>{
                logout();
              }}
                className={`${buttonClass} px-5`}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="sm:py-0 py-5">
              <Link to="/login" className={`${buttonClass} px-6 `}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={`${buttonClass} px-4`}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
