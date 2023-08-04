import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '@/app/index';
import { router } from 'expo-router';

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

describe('App Component', () => {
  it('should render the Go to Todo button', () => {
    const { getByText } = render(<App />);
    const button = getByText('Go to Todo');
    expect(button).toBeTruthy();
  });

  it('should call router.replace with "/Todo" when Go to Todo button is pressed', () => {
    const { getByText } = render(<App />);
    const button = getByText('Go to Todo');
    fireEvent.press(button);
    expect(router.replace).toHaveBeenCalledWith('/Todo');
  });
});
