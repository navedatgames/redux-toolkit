import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/reducer/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <>
      <div className="counter-container">{count.value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Counter;
