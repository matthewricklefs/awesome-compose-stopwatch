import React, { useState } from "react";
import Display from "./Display";

/**
 * I moved all of the objects being passed as properties to child components to here.
 * This may remove access to them from the parent component, IDK i''m not sure
 * However I really like keeping scope of things inside of the components where it is being used
 * @param {*} props 
 * @returns 
 */
function BtnDisplay(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
  updatedS = time.s,
  updatedM = time.m,
  updatedH = time.h; // you can set multiple vars at once? cool.

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
      {status === 0 ? (
        <button
          onClick={start}
          className="stopwatch-btn stopwatch-btn-gre"
        >
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div>
          <button
            onClick={stop}
            className="stopwatch-btn stopwatch-btn-red"
          >
            Stop
          </button>

          <button
            onClick={reset}
            className="stopwatch-btn stopwatch-btn-yel"
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button
            onClick={resume}
            className="stopwatch-btn stopwatch-btn-gre"
          >
            Resume
          </button>

          <button
            onClick={reset}
            className="stopwatch-btn stopwatch-btn-yel"
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      <Display time={time} />
    </div>
  );
}

export default BtnDisplay;
