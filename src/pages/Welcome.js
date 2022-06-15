import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>

      {/* Nested Routes.... */}
      <Route path="/welcome/new-user">
        <p>Welcome new User!</p>
      </Route>
    </section>
  );
};

export default Welcome;
