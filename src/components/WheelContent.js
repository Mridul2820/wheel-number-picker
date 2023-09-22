import React from "react";
import WheelComponent from "./WheelComponent";

const WheelContent = () => {
  const segments = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const segColors = ["#0074BD", "#FAB515"];
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div
      id="wheelCircle"
      style={{
        padding: "10px",
      }}
    >
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment=""
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        primaryColoraround="#ffffffb4"
        contrastColor="white"
        buttonText="SPIN"
        isOnlyOnce={false}
        size={300}
        upDuration={50}
        downDuration={350}
      />
    </div>
  );
};

export default WheelContent;
