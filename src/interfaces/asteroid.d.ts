export interface CloseApproachData {
  close_approach_date?: string;
  epoch_date_close_approach?: number;
  relative_velocity?: {};
  miss_distance?: {};
  orbiting_body?: string;
}

export interface EstimatedDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Asteroid {
  is_potentially_hazardous_asteroid?: boolean,
  neo_reference_id?: string, // The reference ID of the Asteroid - This correlates to the SPK ID for the JPL NEO data
  name?: string,
  nasa_jpl_url?: string, // A Link to the NASA JPL Small-Body Database website
  absolute_magnitude_h?: number, // Is a measure of an asteroids brightness
  close_approach_data?: Array<CloseApproachData>, // Close approach information of the Asteroid
  estimated_diameter?: { // A collection of estimated diameters
    kilometers: EstimatedDiameter;
    meters: EstimatedDiameter;
    miles: EstimatedDiameter;
    feet: EstimatedDiameter;
  },
  orbital_data?: {} // Orbital information of the asteroid
}
