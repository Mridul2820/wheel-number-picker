import React, { useState } from "react";
import WheelComponent from "./WheelComponent";
import Needle from "./icons/Needle";

const WheelContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [numbers, setNumbers] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const segments = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const segColors = ["#0074BD", "#FAB515"];

  const onFinished = (winner, id) => {
    setNumbers((prevState) => {
      return {
        ...prevState,
        [id]: winner,
      };
    });
  };

  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="p-2.5 relative min-h-screen">
        <div className="absolute-center">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => {
              onFinished(winner, 0);
              setShowPopup(true);
            }}
            primaryColor="black"
            primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="SPIN"
            isOnlyOnce={false}
            size={300}
            upDuration={50}
            downDuration={450}
            id="canvas1"
            textspace={130}
          />
        </div>
        <div className="absolute-center">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => onFinished(winner, 1)}
            primaryColor="black"
            primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="SPIN"
            isOnlyOnce={false}
            size={260}
            upDuration={50}
            downDuration={400}
            id="canvas2"
            textspace={108}
          />
        </div>
        <div className="absolute-center">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => onFinished(winner, 2)}
            primaryColor="black"
            primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="SPIN"
            isOnlyOnce={false}
            size={220}
            upDuration={50}
            downDuration={350}
            id="canvas3"
            textspace={88}
          />
        </div>
        <div className="absolute-center">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => onFinished(winner, 3)}
            primaryColor="black"
            primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="SPIN"
            isOnlyOnce={false}
            size={180}
            upDuration={50}
            downDuration={300}
            id="canvas4"
            textspace={68}
          />
        </div>
        <div className="absolute-center">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => onFinished(winner, 4)}
            primaryColor="black"
            primaryColoraround="#ffffffb4"
            contrastColor="white"
            buttonText="SPIN"
            isOnlyOnce={false}
            size={140}
            upDuration={50}
            downDuration={250}
            id="canvas5"
            textspace={48}
          />
        </div>
        <div
          id="spin"
          className="absolute-center rounded-full overflow-hidden cursor-pointer"
        >
          <Needle />
          <span className="absolute-center text-white text-2xl font-bold mt-2">
            SPIN
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className={numbers[0] ? "numbers-active" : "numbers-inactive"}>
          {numbers[0] ? numbers[0] : "5th Num"}
        </div>
        <div className={numbers[1] ? "numbers-active" : "numbers-inactive"}>
          {numbers[1] ? numbers[1] : "4th Num"}
        </div>
        <div className={numbers[2] ? "numbers-active" : "numbers-inactive"}>
          {numbers[2] ? numbers[2] : "3rd Num"}
        </div>
        <div className={numbers[3] ? "numbers-active" : "numbers-inactive"}>
          {numbers[3] ? numbers[3] : "2nd Num"}
        </div>
        <div className={numbers[4] ? "numbers-active" : "numbers-inactive"}>
          {numbers[4] ? numbers[4] : "1st Num"}
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40">
          <div className="absolute-center bg-white rounded-lg p-10 m-5 space-y-6 max-w-4xl w-full">
            <p className="text-3xl text-slate-700 font-bold text-center">
              Winner Of Something
            </p>
            <p className="text-4xl text-primary font-bold text-center">
              {numbers[0] +
                "  " +
                numbers[1] +
                "  " +
                numbers[2] +
                "  " +
                numbers[3] +
                "  " +
                numbers[4]}
            </p>
            <div className="button-wrap">
              <button
                className="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    numbers[0] +
                      numbers[1] +
                      numbers[2] +
                      numbers[3] +
                      numbers[4]
                  );
                }}
              >
                Copy
              </button>
            </div>
            <div className="button-wrap">
              <button
                className="button"
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WheelContent;
