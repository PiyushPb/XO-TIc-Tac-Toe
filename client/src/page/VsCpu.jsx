import React, { useEffect, useState } from "react";
import GameHeader from "../components/vscpu/GameHeader";
import Scoreboard from "../components/vscpu/Scoreboard";

const VsCpu = (props) => {
  const firstPlay = 1;
  useEffect(() => {
    console.log(props.vsCpuFirstTurn);
  }, []);
  return (
    <section className="h-screen w-fit m-auto flex justify-center items-center flex-col px-5 py-5">
      <GameHeader firstPlay={props.vsCpuFirstTurn} />
      <Scoreboard />
    </section>
  );
};

export default VsCpu;
