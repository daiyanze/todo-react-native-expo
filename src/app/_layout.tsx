import { Slot } from 'expo-router'
import '@/assets/css/style.scss'
import { View } from 'react-native'
import { Provider } from '@/context/auth'

export default function() {
  return (
    <Provider>
      <View className="px-4 py-16 h-full bg-gray-100">
        <Slot />
      </View>
    </Provider>
  )
}
