import { Player, Player1, Player2 } from "../components/Player";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
const Home = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
      .then((response) => response.json())
      .then((players) => {
        players.sort((a, b) => b.points - a.points);
        setPlayer(players);
      });
  }, []);

  const allPlayer = [...player];
  player.splice(0, 3);

  if (player.length > 0) {
    return (
      <>
        <div className="text-center flex justify-around bg-indigo-500 mb-2">
          <Link to="/">
            <h1 className="text-white font-bold py-8">Home</h1>
          </Link>

          <h1 className="font-bold text-white text-4xl py-4 ">Leaderboard</h1>

          <Link to="/aboutme">
            <h1 className="text-white font-bold py-8">Aboutme</h1>
          </Link>
        </div>
        <div>
          <div
            style={{
              borderBottomLeftRadius: "64px",
              borderBottomRightRadius: "64px",
            }}
            className="container grid grid-rows-3 bg-indigo-500 p-8 sm:flex sm:justify-around"
          >
            <div className="order-2 sm:order-1">
              <Player2 playerDet={[allPlayer[1], 2]} />
            </div>

            <div className="order-1 sm:order-2">
              <Player1 playerDet={[allPlayer[0], 1]} />
            </div>

            <div className="order-3">
              <Player2 playerDet={[allPlayer[2], 3]} />
            </div>
          </div>
        </div>

        <div className="grid-rows-5 mt-4">
          {player.map((player, index) => (
            <Player key={index + 3} playerDet={[player, index + 3]} />
          ))}
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
