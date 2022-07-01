import { isRequired, isValidDate, isValidNumber} from '../validators';

describe('isRequired', () => {
  ['', undefined, null].forEach((value) => {
    it(`should return "Required" when value = ${value}`, () => {
      expect(isRequired(value)).toEqual('Required')
    })
  })

  it(`should return undefined when there is input`, () => {
    expect(isRequired('test')).toBeUndefined();
  })
});


describe('isValidNumber', () => {
  ['addfd', undefined, null, '123alkd23'].forEach((value) => {
    it(`should return "Must be a number" when value = ${value}`, () => {
      expect(isValidNumber(value)).toEqual('Must be a number')
    })
  })

  it(`should return undefined when there is valid input`, () => {
    expect(isValidNumber(123)).toBeUndefined();
  })
});

describe('isValidDate', () => {
  ['2010', undefined, null, '201-1232'].forEach((value) => {
    it(`should return "Required" when value = ${value}`, () => {
      expect(isValidDate(value)).toEqual('Must be a valid time format eg YYYY-MM-DD')
    })
  })

  it(`should return undefined when there is valid input`, () => {
    expect(isValidDate('2010-01-01')).toBeUndefined();
  })
});
