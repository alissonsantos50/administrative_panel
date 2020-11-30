import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddCostumer from './pages/AddCostumer';
import CostumerInfo from './pages/CostumerInfo';
import Costumers from './pages/Costumers';
import EditCostumer from './pages/EditCostumer';
import SignIn from './pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/costumers' exact component={Costumers} />
        <Route path='/costumers/info/:id' exact component={CostumerInfo} />
        <Route path='/costumers/edit/:id' exact component={EditCostumer} />
        <Route path='/costumers/add' exact component={AddCostumer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
