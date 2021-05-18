import React from "react";
import Characters from "./pages/characters";
import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from "./pages/detail";

export const App = () => {
  useHistory();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Characters /></Route>
        <Route path="/:id"><Detail /></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App