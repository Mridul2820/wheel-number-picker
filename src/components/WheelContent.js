import React, { useState } from "react";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";

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
        <div className="absolute-center rotate-90">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => {
              onFinished(winner, 4);
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
        <div className="absolute-center rotate-90">
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
            size={260}
            upDuration={50}
            downDuration={400}
            id="canvas2"
            textspace={108}
          />
        </div>
        <div className="absolute-center rotate-90">
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
        <div className="absolute-center rotate-90">
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
            size={180}
            upDuration={50}
            downDuration={300}
            id="canvas4"
            textspace={68}
          />
        </div>
        <div className="absolute-center rotate-90">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment=""
            onFinished={(winner) => onFinished(winner, 0)}
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
          className="absolute-center rounded-full cursor-pointer rotate-90"
          onClick={() => {
            setNumbers({
              0: "",
              1: "",
              2: "",
              3: "",
              4: "",
            });
          }}
        >
          <Needle />
          <span className="absolute-center text-white text-2xl font-bold mt-2 -rotate-90">
            SPIN
          </span>
          <div className="w-0.5 h-60 bg-black absolute -top-60 left-1/2 -translate-x-1/2 z-[999]" />
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
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-10 m-5 space-y-6 max-w-3xl w-full mx-auto"
              >
                <div className="absolute inset-0 w-full h-full max-w-3xl mx-auto my-5 pointer-events-none">
                  <Confetti width="740" height="340" />
                </div>
                <p className="text-3xl text-slate-700 font-bold text-center w-full">
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
                      toast.success("Copied to clipboard");
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WheelContent;
