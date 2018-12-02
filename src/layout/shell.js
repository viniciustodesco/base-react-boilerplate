import React from "react";
import { Switch, Route } from "react-router";
import TodoList from "../TodoList";

const Shell = () => (
  <div>
    <Switch>
      <Route path="/login" component={TodoList} />
    </Switch>
  </div>
);

export default Shell;
