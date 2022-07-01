import renderer from 'react-test-renderer';
import RegisterCardForm from '../RegisterCardForm';
import 'jest-styled-components';

describe('<RegisterCardForm />', () => {
  it('should render RegisterCardForm component', () => {
    const component = renderer.create(
      <RegisterCardForm />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
