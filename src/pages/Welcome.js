import React from "react";
import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Link to="new-user">New USer</Link>

      {/* Nested Routes.... */}
      {/* <Routes>
        <Route path="/welcome/new-user" element={<p>Welcome new User!</p>} />
      </Routes> */}

      <Outlet />
    </section>
  );
};

export default Welcome;
