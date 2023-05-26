const Player = (props) => {
  const [player, index] = props.playerDet;
  return (
    <>
      <div className="my-2 flex bg-slate-300 font-bold">
        <div className="w-1/3 flex justify-around">
          <div className="mt-5">{index}</div>
          <div className="container h-16 w-16 py-2 bg-white rounded-full ">
            <div>
              <img
                className="container mx-auto h-12 w-12 rounded-full"
                src={player.avatar}
                alt="avatar"
              />
            </div>
          </div>
          <div className="my-2 w-5">{player.name}</div>
        </div>
        <div className="w-2/3 px-24 flex justify-end mt-5">{player.points}</div>
      </div>
    </>
  );
};

const Player1 = (props) => {
  const [player, index] = props.playerDet;
  return (
    <>
      <div>
        <div className="container mx-auto mb-4 pt-1 text-center h-8 w-8 font-bold bg-slate-300 rounded-full">
          {index}
        </div>
        <div className="container mx-auto h-52 w-52 py-2 bg-white rounded-full">
          <div className="container mx-auto h-48 w-48 rounded-full bg-slate-300">
            <img
              className="container mx-auto h-48 w-48 rounded-full"
              src={player.avatar}
              alt="avatar"
            />
          </div>
        </div>
        <div className="text-center mt-2 font-bold p-1 bg-slate-300 rounded-full">
          {player.name} . {player.points}
        </div>
      </div>
    </>
  );
};

const Player2 = (props) => {
  const [player, index] = props.playerDet;
  return (
    <>
      <div className="mt-14 items-center">
        <div className=" container mx-auto mb-4 text-center h-8 w-8 p-1 font-bold bg-slate-300 rounded-full">
          {index}
        </div>
        <div className="container mx-auto h-36 w-36 py-2 bg-white rounded-full">
          <div>
            <img
              className="container mx-auto h-32 w-32 rounded-full"
              src={player.avatar}
              alt="avatar"
            />
          </div>
        </div>
        <div className="text-center mt-2 font-bold bg-slate-300 p-1 rounded-full">
          {player.name} . {player.points}
        </div>
      </div>
    </>
  );
};

export { Player, Player1, Player2 };
