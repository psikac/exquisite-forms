"use client";

import { count } from 'console';
import React, { useState, FormEvent, useRef, useEffect } from 'react'
 
export default function NumberForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
//   let counter = 0;
//   const startCounter = () => {
//     var intervalId = setInterval(() => {
//         counter++;
//         console.log(counter);
//     }, 1000);
//   }


//   startCounter();


const INITIAL_TIMER = 30;
const TARGET_TIMER = 0;

// Code refactoring
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const interval = useRef();

  useEffect(() => {
    function handleTimer() {
      interval.current = setInterval(() => {
        setTimer((count) => count - 1);
      }, 1000);
    }

    if (timer <= TARGET_TIMER && interval.current) {
      clearInterval(interval.current);
    }
    if (timer === INITIAL_TIMER) {
      handleTimer();
    }
  }, [timer]);

 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error: any) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
 
  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={onSubmit}>
        <input type="number" name="phone" value={timer}/>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}