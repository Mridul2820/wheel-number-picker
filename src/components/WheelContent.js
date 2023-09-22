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
      style={{
        padding: "10px",
        position: "relative",
        width: "700px",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          id="canvas1"
          textspace={125}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          size={250}
          upDuration={50}
          downDuration={300}
          id="canvas2"
          textspace={95}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          size={200}
          upDuration={50}
          downDuration={250}
          id="canvas3"
          textspace={72}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
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
          size={150}
          upDuration={50}
          downDuration={200}
          id="canvas4"
          textspace={48}
        />
      </div>
      <div
        id="spin"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85px",
          height: "85px",
          borderRadius: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default WheelContent;
