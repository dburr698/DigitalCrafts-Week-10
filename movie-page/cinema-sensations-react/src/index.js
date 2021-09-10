import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './pages/HomePage';
import BrowseMovies from './pages/BrowseMoviesPage';
import AddMoviePage from './pages/AddMoviePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/browse-movies' component={BrowseMovies}/>
          <Route path='/add-movie' component={AddMoviePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegistrationPage}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
