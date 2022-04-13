import React, {Component} from "react";

import ErrorIndicator from "../error-indicator";
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from "../../services/swapi-service";
import './app.css';
import ErrorBoundry from "../error-boundry";
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import ItemList from "../item-list";
import {SwapiServiceProvider} from '../swapi-service-context';

import {
  PlanetDetails,
  PersonDetails,
  StarshipDetails,
  PlanetList,
  PersonList,
  StarshipList 
} from '../sw-components';
import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {


    state = {
      swapiService: new DummySwapiService(),
      showRandomPlanet: true,
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

    toggleRandomPlanet = () => {
        this.setState((state) => {
          return {
            showRandomPlanet: !state.showRandomPlanet
          }
        });
      };

      componentDidCatch() {
        this.setState({hasError: true});

      }

    render() {

      if (this.state.hasError) {
        return <ErrorIndicator />
      }

        const planet = this.state.showRandomPlanet ?
        <RandomPlanet/> :
        null;   
        
        const {getPerson, 
               getStarship,
               getPersonImage,
               getStarshipImage,
               getAllPeople,
               getAllPlanets } = this.state.swapiService;

        const personDetails = (
          <ItemDetails 
            itemId={11} 
            getData={getPerson}
            getImageUrl={getPersonImage} >
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />

          </ItemDetails>
        );

        const starshipDetails = (
          <ItemDetails 
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
            <Record field='costInCredits' label='Cost' />


          </ItemDetails>
        );

        return (
          <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
              <div className="stardb-app">
                <Header onServiceChange={this.onServiceChange} />

                <PersonDetails itemId={11} />
                <PlanetDetails itemId={5} />
                <StarshipDetails itemId={9} />

                <PersonList />
                <StarshipList />
                <PlanetList />
              </div>
            </SwapiServiceProvider>
          </ErrorBoundry>
        );

    }
}




{/* <div className="row mb2 button-row">
<button
  className="toggle-planet btn btn-warning btn-lg"
  onClick={this.toggleRandomPlanet}>
  Toggle Random Planet
</button>
<ErrorButton />
</div> */}