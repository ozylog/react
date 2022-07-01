import renderer from 'react-test-renderer';
import Menu from '../Menu';
import 'jest-styled-components';
import * as ContextSelector from 'use-context-selector';

describe('<Menu />', () => {
  it('should render not Menu component when isMenuExpanded = false', () => {
    const component = renderer.create(
      <Menu />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render Menu component when isMenuExpanded = true', () => {
    const useContextSelector = jest.spyOn(ContextSelector, 'useContextSelector');
    useContextSelector.mockReturnValueOnce(true);

    const component = renderer.create(
      <Menu />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    useContextSelector.mockClear();
  })
});
