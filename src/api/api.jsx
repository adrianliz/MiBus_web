import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_MIBUS_API
    });
  }

  async apiCall(request) {
    try {
      return (await request()).data;
    } catch (err) {
      console.error(err);
      return err.response.data;
    }
  }

  async getBuses() {
    return await this.apiCall(() => this.api.get(`/buses/`));
  }

  async getStops() {
    return await this.apiCall(() => this.api.get(`/stops/`));
  }

  async getNextBusesStop(stopId) {
    return await this.apiCall(() => this.api.get(`/buses/stop/${stopId}`));
  }
}

const api = new Api();
export default api;