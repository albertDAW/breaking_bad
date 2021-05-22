import React from "react";
import Characters from "./pages/characters";
import { useHistory } from "react-router";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from "./pages/detail";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import cabecera from "./resources/cabecera.jpg";


export const App = () => {
  useHistory();
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <div>
          <img style={{ width: '100%' }} alt='cabecera' src={cabecera} />
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Characters /></Route>
            <Route path="/:id"><Detail /></Route>
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    </div>
  );
}
export default App