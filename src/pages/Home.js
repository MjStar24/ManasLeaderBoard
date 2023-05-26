import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="h-screen w-screen bg-slate-500">
        <div className="container mx-auto flex items-center justify-around pt-2 pb-2 bg-slate-700">
          <Link to={{ pathname: "https://www.iitg.ac.in/" }} target="_blank">
            <img
              style={{ height: 100, width: 100 }}
              className="rounded-full"
              src="logo.png"
              alt="iitglogo"
            ></img>
          </Link>
          <Link
            to={{ pathname: "https://www.iitg.ac.in/" }}
            target="_blank"
            className="font-bold text-white text-md sm:text-3xl"
          >
            IIT GUWAHATI
          </Link>
          <Link
            to={{ pathname: "https://linktr.ee/codingclubiitg" }}
            target="_blank"
            className="font-bold text-white text-sm sm:text-2xl"
          >
            CODING CLUB
          </Link>
        </div>
        <div className="contaier mx-auto flex justify-around h-5/6 py-20">
          <div className="flex flex-col">
            <Link to="/leaderboard">
              <button className="bg-yellow-500 mx-auto border-4 border-white mt-28 p-8 rounded-full font-bold hover:bg-violet-600 active:bg-violet-700 ">
                <h1 className="text-white font-bold text-5xl">LEADERBOARD</h1>
              </button>
            </Link>

            <Link to="/aboutme">
              <button className="bg-yellow-500 ml-32 p-4 border-4 border-white mt-12 rounded-full font-bold hover:bg-violet-600 active:bg-violet-700 ">
                <h1 className="text-white font-bold text-2xl">About Me</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
