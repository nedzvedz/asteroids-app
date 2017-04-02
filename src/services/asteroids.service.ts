import { API_KEY, ASTEROIDS_FEED_API_LINK, ASTEROIDS_LOOKUP_API_LINK } from '../constants/api.constants';
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
  const { startDate, endDate } = getDates();
  return fetch(`${ASTEROIDS_FEED_API_LINK}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`)
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

function getDates() {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  return {
    startDate: `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
    endDate: `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
  };
}

export default {
  getAsteroids,
  getAsteroidById
}
