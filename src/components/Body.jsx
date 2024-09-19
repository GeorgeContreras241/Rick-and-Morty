import React, { useContext } from 'react'
import { counterContext } from '../context/CounterContext'

export const Body = () => {
  const { counter } = useContext(counterContext)
  {}
  return (
    <>
      <div>Body</div>
      <p>{counter}</p>
    </>

  )
}
