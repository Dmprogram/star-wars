import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService, withChildFunction, compose } from "../hoc";

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);
const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships,
});

const mapVehicleMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllVehicles,
});

const mapSpecieMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllSpecies,
});

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList);
const VehicleList = compose(
  withSwapiService(mapVehicleMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList);
const SpecieList = compose(
  withSwapiService(mapSpecieMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export { PersonList, StarshipList, PlanetList, VehicleList, SpecieList };
