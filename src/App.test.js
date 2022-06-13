import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to Blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  // expect background color of button to be 'red'
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  // click the button
  fireEvent.click(colorButton);
  // expect background color of button to be 'blue'
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

test('button text turns to change to red when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  // click the button
  fireEvent.click(colorButton);
  // expect the button text to be 'Change to Red'
  expect(colorButton.textContent).toBe("Change to red");
});

test('button starts out enabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();
});

test('checkbox starts out unchecked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });
  expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', { name: /change to/i });
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
});

test('button is re-enabled when checkbox is unchecked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', { name: /change to/i });
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
