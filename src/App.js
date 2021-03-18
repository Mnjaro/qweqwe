import { useState } from "react";
import axios from "axios";

function App() {
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://matchup-be.herokuapp.com/users/login", {
        username: "Hermann",
        password: "123",
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log("error", e));
  };
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
