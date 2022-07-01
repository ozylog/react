import renderer from 'react-test-renderer';
import Layout from '../Layout';
import 'jest-styled-components';

describe('<Layout />', () => {
  it('should render Layout component when title = Register card form', () => {
    const component = renderer.create(
      <Layout title='Register card form' />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render Layout component when title = Menu', () => {
    const component = renderer.create(
      <Layout title='Menu' />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
