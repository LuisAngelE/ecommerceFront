import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

const  AdminRoutes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Dashboard} /> */}
      <Route exact path="/" />
    </Switch>
  );
};

export default AdminRoutes;
