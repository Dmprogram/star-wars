import React, {Component} from "react";

import ErrorIndicator from "../error-indicator";
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import './app.css';
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';

import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import DummySwapiService from "../../services/dummy-swapi-service";

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
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />
            </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
      );

    }
}
