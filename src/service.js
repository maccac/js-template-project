export default class FruitService {
  constructor(api) {
    this.api = api;
  }

  getFruit() {
    return this.api.get();
  }
}
