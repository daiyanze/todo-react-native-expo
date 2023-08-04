import React from 'react'
import { router } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Home() {

  const handleGoToTodo = () => {
    router.replace('/Todo')
  }

  return (
    <View className="h-full relative">
      <View className="absolute bottom-0 left-0 w-full">
        <TouchableOpacity
          className="bg-blue-700 rounded-2xl px-4 py-2"
          onPress={handleGoToTodo}>
          <Text className="font-semibold text-lg text-white text-center w-full">Go to Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
