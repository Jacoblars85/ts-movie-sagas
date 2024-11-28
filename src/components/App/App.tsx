import { Route, HashRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
