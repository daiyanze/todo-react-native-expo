import TodoList from '@/components/TodoList';
import { useAuth } from '@/context/auth';
import { authenticateAsync } from 'expo-local-authentication';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function Todo() {
  const { setAuthRes, authRes } = useAuth()

  useEffect(() => {
    // Authenticate to allow access to Todo
    if (!authRes) {
      authenticateAsync()?.then((res) => {
        if (res) {
          setAuthRes!(res)
        }
      })
    }
  })

  return (
    <View>
      <TodoList />
    </View>
  )
}
