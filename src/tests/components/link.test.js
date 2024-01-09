import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Link } from '../../components';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toBe('normal');

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).not.toBe('normal');
  expect(tree.props.className).toBe('hovered');

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toBe('normal');
  expect(tree.props.className).not.toBe('hovered');
});