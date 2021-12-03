import { render, screen } from '@testing-library/react';
import App from './App';
import Store from './store';

test('checks if Siisike word does not exist', () => {
  render(
    <Store>
      <App />
    </Store>
  );
  const someDummyText = screen.queryByText(/Siisike/i);
  expect(someDummyText).toBeNull();
});

test('checks if sentence exists', () => {
  render(
    <Store>
      <App />
    </Store>
  );
  const textThatMustBeThere = screen.getByText(/It's easy! Add the birthdays./i)
  expect(textThatMustBeThere).toBeInTheDocument();

  // One other way how to expect something to exist
  // expect(textThatMustBeThere).not.toBeNull();
});