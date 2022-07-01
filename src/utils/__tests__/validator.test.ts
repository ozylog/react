import {isRequired} from '../validators';

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
