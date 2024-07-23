"use client";
import clsx from "clsx";
import { useRef, useState } from "react";
import { CounterHandle, NumberCounter } from "../guess-form/number-counter";

export default function Page() {
  const NUMBER_LENGTH = 6;
  const childRefList = useRef<CounterHandle[]>([]);

  const [currentCounterIndex, setCurrentCounterIndex] = useState(0);

  function handleClick() {
    childRefList.current[currentCounterIndex].handleStopCounter();
    setCurrentCounterIndex(currentCounterIndex + 1);
  }

  function handleReset() {
    setCurrentCounterIndex(0);
    childRefList.current.forEach((element) => {
      element.handleResetCounter();
    });
    // do {
    //   console.log(currentCounterIndex);
    //   childRefList.current[currentCounterIndex].handleStopCounter();
    //   setCurrentCounterIndex(currentCounterIndex - 1);
    // } while (currentCounterIndex > 0);
    // setCurrentCounterIndex(0);
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Number form</h1>
      <div className="flex gap-4 px-8 items-center justify-center align-middle">
        {Array.from({ length: NUMBER_LENGTH }, (_, i) => (
          <NumberCounter
            key={i}
            ref={(element) => {
              if (element) {
                childRefList.current[i] = element;
              } else {
                delete childRefList.current[i];
              }
            }}
          />
        ))}
      </div>
      <div className="flex gap-5">
        <button
          className={clsx("p-3 w-fit rounded-md", {
            "bg-indigo-200": currentCounterIndex === NUMBER_LENGTH,
            "bg-indigo-500": currentCounterIndex !== NUMBER_LENGTH,
          })}
          disabled={currentCounterIndex === NUMBER_LENGTH}
          onClick={() => handleClick()}
        >
          Press Me
        </button>
        <button
          className="p-3 w-fit rounded-md bg-red-400"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
