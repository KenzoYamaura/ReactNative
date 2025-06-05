import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {
  interface Tarefa {
    id: number;
    texto: string;
  }

  const [contTarefas, setContTarefas] = useState(0);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novatarefa, setNovaTarefa] = useState('');


  const addTarefa = () => {
    if (novatarefa.trim() === '') return;

    setTarefas([...tarefas, { id: contTarefas + 1, texto: novatarefa }]);
    setNovaTarefa('');
    setContTarefas(contTarefas + 1);
  };

  return (
    <View className="flex-1 p-2 mx-4 gap-3 bg-black">

      <Text className='text-2xl font-semibold text-white'>
        Lista de Tarefas
      </Text>

      <TextInput placeholder='Digite uma tarefa'
        className="text-white text-lg p-2 border-white border rounded-md"
        value={novatarefa}
        onChangeText={setNovaTarefa} />

      <TouchableOpacity className='bg-blue-700 justify-center items-center rounded-md p-2 '
        onPress={addTarefa}> <Text className='text-white font-semibold'>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <Text className='text-2xl font-semibold text-white'>Total de Tarefas: {contTarefas}</Text>

      {tarefas.map((tarefas) => (
        <Text key={tarefas.id} className="text-white text-lg p-1 border-b border-gray-300">
          {tarefas.id}. {tarefas.texto}
        </Text>
      ))}

    </View>
  );
}
