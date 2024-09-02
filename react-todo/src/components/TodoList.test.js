import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';  // Adjust the import path if necessary

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  // Add more assertions to test other aspects of your component
});