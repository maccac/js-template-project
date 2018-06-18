import FruitService from './service';
import FruitApi from './api';

jest.mock('./api');

beforeEach(() => {
  FruitApi.mockClear();
});

it('We can mock a thing', () => {
  const s = new FruitService(new FruitApi());
  s.getFruit();
  expect(FruitApi).toHaveBeenCalled();
});
