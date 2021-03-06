import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';

import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PlayersPage from '../components/PlayersPage';
import AddPlayerPage from '../components/AddPlayerPage';
import EditPlayerPage from '../components/EditPlayerPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/players" component={PlayersPage} />
        <Route path="/player/:id" component={EditPlayerPage} />
        <Route path="/player" component={AddPlayerPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
