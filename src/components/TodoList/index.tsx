import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import TodoItem from '@/components/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [todoItemText, setTodoItemText] = useState('');
  const [actionButtonText, setActionButtonText] = useState('add');
  const updateItemRef = useRef<number>(NaN);

  const handleAddTodo = () => {
    if (todoItemText.trim() === '') return;
    const newTodos = todos.splice(0, todos.length);

    newTodos.push({
      id: Date.now(),
      text: todoItemText,
    });

    setTodos(newTodos);
    setTodoItemText('');
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((item: any) => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleSetUpdateItem = (id: number) => {
    const todo = todos.find((item: any) => item.id == id);
    setTodoItemText(todo!.text);
    setActionButtonText('update');
    updateItemRef.current = id;
  }

  const handleUpdateTodo = (id: number) => {
    const updatedTodos = todos.map((item: any) => {
      if (item.id == id) {
        item.text = todoItemText;
      }

      return { id: item.id, text: item.text };
    })

    setTodos(updatedTodos);
    setTodoItemText('');
    setActionButtonText('add');
    updateItemRef.current = NaN;
  }

  const handleTextEditing = () => {
    actionButtonText == 'add'
      ? handleAddTodo()
      : handleUpdateTodo(updateItemRef.current)
  }

  return (
    <View className="py-4 h-full">
      <Text className="text-3xl mb-4 font-bold text-blue-700">Todo:</Text>
      <FlatList
        data={todos}
        renderItem={({ item }: any) => {
          return (
            <TodoItem
              text={item.text}
              onPressDelete={() => handleDeleteTodo(item.id)}
              onPressSetUpdateItem={() => handleSetUpdateItem(item.id)}
            />
          )
        }}
        keyExtractor={(item: any) => item.id.toString()}
        className="flex-grow"
      />
      <View className="flex flex-row items-center mt-4 bg-white rounded-2xl px-5 py-4">
        <TextInput
          className="flex-1 h-12"
          placeholder="Add a new todo..."
          value={todoItemText}
          onChangeText={(text) => setTodoItemText(text)}
          onSubmitEditing={handleTextEditing}
        />
        <TouchableOpacity
          className="ml-4 bg-blue-700 rounded-2xl px-4 py-2"
          onPress={handleTextEditing}
        >
          <Text
            className="font-semibold text-lg text-white"
          >
            {actionButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoList;
