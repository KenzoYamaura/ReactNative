import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        className='w-32 h-32 rounded-full mb-4'
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5YBx5noU3Gn4ier4-3XHy3P0_rIjGxYPqw&s" }}
      />

      <Text className="text-4xl text-gray-800 font-bold mb-3 ">Rafael Kenzo</Text>

      <Text className="text-2xl text-gray-500 font-bold mb-2">Idade: 25 anos</Text>

      <Text className="text-2xl text-gray-500 font-bold mb-2">Localização: Campo Grande MS</Text>

      <TouchableOpacity
        className="bg-blue-700 px-3 py-2 rounded-full">
        <Text
          className="text-white font-bold ">Editar Perfil
        </Text>

      </TouchableOpacity>

    </View>
  );
}
