import { API_KEY, /*ASTEROIDS_FEED_API_LINK,*/ ASTEROIDS_LOOKUP_API_LINK } from '../constants/api.constants';
import { Asteroid } from '../interfaces/asteroid';

interface AsteroidsFeedResponse {
  links?: {
    prev: string,
    next: string,
    self: string
  };
  element_count?: number;
  near_earth_objects?: {};
}

export function getAsteroids() {
  return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${API_KEY}`)
    .then((res: Response): Promise<AsteroidsFeedResponse> => res.json())
    .then((data): Promise<Array<Asteroid>> => {
      // TODO: Check for other options to fix missing 'values' method at Object constructor
      return (<any> Object).values(data.near_earth_objects)
        .reduce((allAsteroids: Array<Asteroid>, asteroidsAtSpecificDate: Array<Asteroid>) => {
          return [...allAsteroids, ...asteroidsAtSpecificDate];
        }, []);
    });
}

export function getAsteroidById(id: string) {
  return fetch(`${ASTEROIDS_LOOKUP_API_LINK}${id}?API_KEY=${API_KEY}`)
    .then((res: Response): Promise<Asteroid> => res.json());
}

export default {
  getAsteroids,
  getAsteroidById
}
