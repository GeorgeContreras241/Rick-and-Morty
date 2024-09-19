import React, { useContext } from 'react'
import { counterContext } from '../context/CounterContext'

export const Fotter = () => {
  const { counter } = useContext(counterContext)
  return (
    <>
      <div>Fotter</div>
      <p>{counter}</p>
    </>

  )
}
