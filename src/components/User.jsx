import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/reducer/userSlice";

const User = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const { user } = useSelector((state) => state.user);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(data));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>This is user form please enter details</div>
      <form onSubmit={(data) => handleSubmit(data)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
          <input type="file" />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>{user?.name}</div>
    </>
  );
};

export default User;
