import React from "react";
// /login
const page = () => {
  return (
    <div>
      <h1> Login </h1>
      <form>
        <label> Username: </label>
        <input type="text" name="username" />
        <label> Password: </label>
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default page;