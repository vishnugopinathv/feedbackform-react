import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

function Feedback() {
  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([{ name: user, dept: department, rate: rating, id: uuidv1()},
        ...data]);
        setUser('');
        setDepartment('');
        setRating(0);
  };
  return (
    <React.Fragment>
      <div className="feedback__container">
        <h1>Feedback Form</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="input__container">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            required/>
          </div>
          <div className="input__container">
            <label htmlFor="">Rating:</label>
            <input
              type="number"
              value={rating}
              max={5}
              min={0}
              step={0.5}
              onChange={(e) => setRating(e.target.value)}
            required/>
          </div>
          <input type="submit" className="submitbtn" />
        </form>
      </div>
      <div className="submit__container">
        {data.map((v) => {
          return (
            <div className="submit___item" key={v.id}>
              <div className="item__data">
                <p>Name: {v.name} </p>
                <p>Department: {v.dept} </p>
                <p>Rating: {v.rate} </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Feedback;
