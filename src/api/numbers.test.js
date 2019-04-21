import { generateNumbers, getNumbers } from './numbers';
import client from './client';

const resMock = {
  data: {
    data: ['0203232322'],
  },
};

describe('generateNumbers', () => {
  it('should generate numbers', async () => {
    client.post = jest.fn().mockReturnValue(Promise.resolve(resMock));
    const numbers = await generateNumbers(1);
    expect(numbers).toEqual(resMock.data.data);
  });
});

describe('getNumbers', () => {
  it('should fetch generated numbers', async () => {
    client.get = jest.fn().mockReturnValue(Promise.resolve(resMock));
    const numbers = await getNumbers();
    expect(numbers).toEqual(resMock.data.data);
  });

  it('should fetch generated numbers with sorting', async () => {
    client.get = jest.fn().mockReturnValue(Promise.resolve(resMock));
    const numbers = await getNumbers('asc');
    expect(numbers).toEqual(resMock.data.data);
    expect(client.get).toHaveBeenCalledWith('/numbers?order=asc');
  });
});

