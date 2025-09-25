import { use, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <div>
        <button className="primary-button w-fit mr-5" onClick={auth.signOut}>
          Logout
        </button>
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
