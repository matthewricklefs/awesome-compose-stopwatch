import React, { useState, useEffect } from "react";

function BtnDisplay(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div>
      {props.status === 0 ? (
        <button
          onClick={props.start}
          className="stopwatch-btn stopwatch-btn-gre"
        >
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button
            onClick={props.stop}
            className="stopwatch-btn stopwatch-btn-red"
          >
            Stop
          </button>

          <button
            onClick={props.reset}
            className="stopwatch-btn stopwatch-btn-yel"
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button
            onClick={props.resume}
            className="stopwatch-btn stopwatch-btn-gre"
          >
            Resume
          </button>

          <button
            onClick={props.reset}
            className="stopwatch-btn stopwatch-btn-yel"
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnDisplay;
