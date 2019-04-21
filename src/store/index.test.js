import client from '../api/client';
import {
  reducer,
  generateNumbersAction,
  getNumbersAction,
  isFetchingAction,
  initialState,
  GENERATE_NUMBERS,
  GET_NUMBERS,
  IS_FETCHING_NUMBERS,
} from '../store';

const resMock = {
  data: {
    data: ['0203232322'],
  },
};

describe('reducer', () => {
  it('should return default state', () => {
    const state = reducer(initialState, {type: 'Invalid type'});
    expect(state).toEqual(initialState);
  });
});

describe('generateNumbersAction', () => {
  it('should dispatch GENERATE_NUMBERS action', async () => {
    client.post = jest.fn().mockReturnValue(Promise.resolve(resMock));
    const dispatch = (data) => data;
    const action = await generateNumbersAction(1)(dispatch);
    expect(action.type).toBe(GENERATE_NUMBERS);
    const state = reducer(initialState, action);
    expect(state.numbers).toEqual(resMock.data.data);
  });
});

describe('getNumbersAction', () => {
  it('should dispatch GET_NUMBERS action', async () => {
    client.get = jest.fn().mockReturnValue(Promise.resolve(resMock));
    const dispatch = (data) => data;
    const action = await getNumbersAction()(dispatch);
    expect(action.type).toBe(GET_NUMBERS);
    const state = reducer(initialState, action);
    expect(state.numbers).toEqual(resMock.data.data);
  });
});

describe('isFetchingAction', () => {
  it('should dispatch action IS_FETCHING_NUMBERS', () => {
    const action = isFetchingAction();
    expect(action.type).toBe(IS_FETCHING_NUMBERS);
    const state = reducer(initialState, action);
    expect(state.isFetchingNumbers).toBeTruthy();
  });
});

