import React, { useContext } from 'react'
import { counterContext } from '../context/CounterContext'

export const Header = () => {
  const { counter,increment,decrement,reset } = useContext(counterContext)
  console.log(counter)
  return (
    <>
      <div>Header</div>
      <h1>{counter}</h1>
      <button onClick={() => increment()} >aumentar</button>
      <button onClick={() => decrement()}>disminuir</button>
      <button onClick={() => reset()} >reset</button>
    </>

  )
}
