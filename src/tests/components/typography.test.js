import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import { Typography } from '../../components';

it('Typography component', () => {
  const h1Component = renderer.create(<Typography variant="h1">Título H1</Typography>);
  const h2Component = renderer.create(<Typography variant="h2">Subtítulo H2</Typography>);
  const pComponent = renderer.create(<Typography variant="p">Este es un párrafo</Typography>);
  const aComponent = renderer.create(<Typography variant="a">Enlace</Typography>);
  const pWithoutVariantComponent = renderer.create(<Typography >Este es un párrafo</Typography>);

  expect(h1Component.toJSON()?.type).toBe('h1');
  expect(h2Component.toJSON()?.type).toBe('h2');
  expect(pComponent.toJSON()?.type).toBe('p');
  expect(aComponent.toJSON()?.type).toBe('a');
  expect(pWithoutVariantComponent.toJSON()?.type).toBe('p');
  expect(h2Component.toJSON()?.props.className).toContain('typography');

  expect(h1Component.toJSON()).toMatchSnapshot();
  expect(h2Component.toJSON()).toMatchSnapshot();
  expect(pComponent.toJSON()).toMatchSnapshot();
  expect(aComponent.toJSON()).toMatchSnapshot();
  expect(pWithoutVariantComponent.toJSON()).toMatchSnapshot();
});