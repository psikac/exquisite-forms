"use client";

import { useInterval } from "@/app/util/useInterval";
import {
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export type CounterHandle = {
  handleStopCounter: () => void;
  handleResetCounter: () => void;
};

type Props = {};

export const NumberCounter = forwardRef<CounterHandle, Props>(
  function NumberCounter(props, ref) {
    const randomNumber = Math.floor(Math.random() * 10);
    let [count, setCount] = useState(0);
    let [delay, setDelay] = useState(50);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
      setCount(randomNumber);
    }, []);

    useInterval(
      () => {
        setCount(count === 9 ? 0 : count + 1);
      },
      isRunning ? delay : null
    );

    useImperativeHandle(ref, () => {
      return {
        handleStopCounter() {
          setIsRunning(false);
        },
        handleResetCounter() {
          setIsRunning(true);
        },
      };
    });

    return <div className="p-3 m-3 w-7 text-3xl">{count}</div>;
  }
);
