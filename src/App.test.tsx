import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { PLACEHOLDER, TEST_FOLDER_NAME } from './constants';

test('search by name', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(PLACEHOLDER);

  fireEvent.change(searchElement, {target: {value: TEST_FOLDER_NAME}})


  const folderList = screen.getByTestId(TEST_FOLDER_NAME);

  expect(folderList).toBeInTheDocument();
});
