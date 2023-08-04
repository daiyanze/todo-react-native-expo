import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TodoItem(props: any) {
  const { text, onPressDelete, onPressSetUpdateItem } = props;

  return (
    <View className="flex flex-row px-4 py-3 justify-between bg-white rounded-2xl items-center mb-4">
      <View className="p-2 bg-blue-700 rounded-full mr-2" />
      <TouchableOpacity className="flex-1" onPress={onPressSetUpdateItem}>
        <Text className="text-lg text-gray-700 font-semibold">{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-2 py-1"
        onPress={onPressDelete}
      >
        <Text className="text-lg text-gray-700 font-semibold">delete</Text>
      </TouchableOpacity>
    </View>
  );
}
