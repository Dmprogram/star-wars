import React, {Component} from "react";

import ErrorIndicator from "../error-indicator";
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import './app.css';
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';
import { StarshipDetails } from "../sw-components";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";
import { useParams } from "react-router-dom";

import DummySwapiService from "../../services/dummy-swapi-service";

import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom";

export default class App extends Component {

    state = {
      swapiService: new SwapiService(),
      hasError: false
    };

    onServiceChange = () => {
      this.setState(({swapiService}) => {
        const Service = swapiService instanceof SwapiService ? 
                          DummySwapiService : SwapiService;

        console.log('swithced', Service.name);
        
        return {
          swapiService: new Service()
        };
      });
      
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
                <Header onServiceChange={this.onServiceChange} />
                <RandomPlanet />
                <Routes>
                  <Route path="/" element={<h2>Welcome to Star-Wars</h2>} />  
                  <Route path="/people" element={<PeoplePage />} />
                  <Route path="/planets" element={<PlanetsPage />} />
                  <Route path="/starships" element={<StarshipsPage />} />
                  <Route path="/starships/:id" element={<StarshipDetails />} />
                </Routes>
              </div>
            </BrowserRouter>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );

    }
}
