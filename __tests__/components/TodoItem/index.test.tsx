import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '@/components/TodoItem';

describe('TodoItem Component', () => {
  it('should render correctly', () => {
    const props = {
      text: 'Test Todo',
      onPressDelete: jest.fn(),
      onPressSetUpdateItem: jest.fn(),
    };
    const { getByText } = render(<TodoItem {...props} />);
    expect(getByText('Test Todo')).toBeTruthy();
  });

  it('should call onPressDelete when delete is pressed', () => {
    const onPressDelete = jest.fn();
    const props = {
      text: 'Test Todo',
      onPressDelete,
      onPressSetUpdateItem: jest.fn(),
    };
    const { getByText } = render(<TodoItem {...props} />);
    fireEvent.press(getByText('delete'));
    expect(onPressDelete).toHaveBeenCalled();
  });

  it('should call onPressSetUpdateItem when the text is pressed', () => {
    const onPressSetUpdateItem = jest.fn();
    const props = {
      text: 'Test Todo',
      onPressDelete: jest.fn(),
      onPressSetUpdateItem,
    };
    const { getByText } = render(<TodoItem {...props} />);
    fireEvent.press(getByText('Test Todo'));
    expect(onPressSetUpdateItem).toHaveBeenCalled();
  });
});
