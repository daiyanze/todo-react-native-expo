import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoList from '@/components/TodoList';

describe('TodoList Component', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    expect(getByPlaceholderText('Add a new todo...')).toBeTruthy();
    expect(getByText('add')).toBeTruthy();
  });

  it('should update todoItemText when typing in the TextInput', () => {
    const { getByPlaceholderText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a new todo...');
    fireEvent.changeText(input, 'Test Todo');
    expect(input.props.value).toBe('Test Todo');
  });
});
