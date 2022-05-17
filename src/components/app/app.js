import React, {Component} from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import './app.css';
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';

import {
  PeoplePage, 
  PlanetsPage,
  StarshipsPage
} from "../pages";

import { BrowserRouter, Route, Routes, } from "react-router-dom";

export default class App extends Component {

    state = {
      swapiService: new SwapiService(),
      hasError: false,
      isLoggedIn: false
    };

      componentDidCatch() {
        this.setState({hasError: true});

      }

    render() {
      
      return (
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <BrowserRouter>
              <div className="stardb-app">
                <Header />
                <RandomPlanet />
                <Routes>
                  <Route path="/" element={<h1>Welcome to Star-Wars</h1>} /> 
                  <Route path="/people" element={<PeoplePage />} /> 
                  <Route path="/people/:id" element={<PeoplePage />} />
                  <Route path="/planets" element={<PlanetsPage />} />
                  <Route path="/planets/:id" element={<PlanetsPage />} />
                  <Route path="/starships" element={<StarshipsPage />} />
                  <Route path="/starships/:id" element={<StarshipsPage />} />
                  <Route path="*" element={<h2>Page not found</h2>} />
                </Routes>
              </div>
            </BrowserRouter>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );

    }
}
