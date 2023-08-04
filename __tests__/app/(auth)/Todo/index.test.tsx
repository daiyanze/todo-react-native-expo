import React from 'react';
import { render } from '@testing-library/react-native';
import Todo from '@/app/(auth)/Todo';
import { authenticateAsync } from 'expo-local-authentication';

jest.mock('expo-local-authentication', () => ({
  authenticateAsync: jest.fn(),
}));

// Mocking useAuth custom hook
jest.mock('@/context/auth', () => ({
  useAuth: () => ({
    setAuthRes: jest.fn(),
    authRes: false,
  }),
}));

describe('Todo Component', () => {
  it('should render TodoList', () => {
    const { getByText } = render(<Todo />);
    expect(getByText('Todo:')).toBeTruthy();
  });

  it('should call authenticateAsync if not authenticated', () => {
    render(<Todo />);
    expect(authenticateAsync).toHaveBeenCalled();
  });
});
