import React from "react";
import GameHeader from "../components/vscpu/GameHeader";
import Scoreboard from "../components/vscpu/Scoreboard";

const VsCpu = () => {
  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader />
      <Scoreboard />
    </section>
  );
};

export default VsCpu;
