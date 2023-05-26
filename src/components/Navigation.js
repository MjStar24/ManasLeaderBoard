import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-around py-4 bg-slate-600">
        <Link to="/">
          <h1 className="text-white font-bold py-4">Home</h1>
        </Link>

        <Link to="/leaderboard">
          <h1 className="text-white font-bold py-4">Leaderboard</h1>
        </Link>

        <Link to="/aboutme">
          <h1 className="text-white font-bold py-4">About Me</h1>
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
