import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Index() {

  const [contTarefas, setContTarefas] = useState(0);

  return (
    <View className="flex-1 p-2 mx-4 gap-2">

      <Text className='text-2xl font-semibold'>
        Lista de Tarefas
      </Text>

      <TextInput placeholder='Digite uma tarefa' className='text-lg p-2'/>

      <TouchableOpacity      
        className='bg-blue-700 justify-center items-center rounded-md p-2 text-white font-semibold'
        onPress={() => setContTarefas(contTarefas + 1)}>
        Adicionar Tarefa
      </TouchableOpacity>

      <Text>Total de Tarefas {contTarefas}</Text>

    </View>
  );
}
