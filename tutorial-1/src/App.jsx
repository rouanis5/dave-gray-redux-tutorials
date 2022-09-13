import { useState} from "react"
import { useSelector, useDispatch} from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./features/counter/CounterSlice"

const App= ()=> {
  const [incrementAmount, setIncrementAmount] = useState(0)
  const [decrementAmount, setDecrementAmount] = useState(0)

  const {count} = useSelector(state => state.counter)
  const dispatcher = useDispatch()
  return (
    <div>
      <h1>Byebye world !</h1>
      <p>num of clicks = {count}</p>
      <button onClick={() => {dispatcher(increment())}}>+</button>
      <button onClick={() => {dispatcher(decrement())}}>-</button>
      <button onClick={() => {dispatcher(reset())}}>Reset</button>
      <div>
        <button onClick={() => {dispatcher(incrementByAmount(parseInt(incrementAmount) || 0))}}>Increment by</button>
        <input type="number" onChange={(e)=> setIncrementAmount(e.target.value)} value={incrementAmount} />
      </div>
      <div>
        <button onClick={() => {dispatcher(decrementByAmount(parseInt(decrementAmount) || 0))}}>Decrement by</button>
        <input type="number" onChange={(e)=> setDecrementAmount(e.target.value)} value={decrementAmount} />
      </div>
    </div>
  )
}

export default App
