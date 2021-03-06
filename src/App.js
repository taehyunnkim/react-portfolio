import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Project from './components/projects/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/react-portfolio' component={Dashboard} />
          <Route path='/project/:id' component={Project} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
