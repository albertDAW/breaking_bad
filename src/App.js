import React from "react";
import Characters from "./pages/characters";
import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from "./pages/detail";
import cabecera from "./resources/cabecera.jpg";


export const App = () => {
  useHistory();
  return (
    <div>
      <div>
        <img style={{ width: '100%' }} alt='cabecera' src={cabecera} />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Characters /></Route>
          <Route path="/:id"><Detail /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App