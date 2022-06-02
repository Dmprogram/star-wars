export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";

  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResourse(`/planets`);
    return res.results.map(this._transformPlanet).slice(1);
  };

  getPlanet = async (id) => {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResourse(`/starships`);
    return res.results.map(this._transformStarship).slice(2, 9);
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => `${this._imageBase}/characters/${id}.jpg`;

  getStarshipImage = (item) => `${this._imageBase}/starships/${item.id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageBase}/planets/${id}.jpg`;

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    terrain: planet.terrain,
  });

  _transformStarship = (starship) => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  });

  _transformPerson = (person) => ({
    id: this._extractId(person),
    height: person.height,
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });
}
