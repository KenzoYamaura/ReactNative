import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <Text
        className="bg-blue-700 font-bold text-white p-4 text-lg">
        Detalhes do Produto
      </Text>

      <Image source={{ uri: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/31/13_54_06_685_13_7_9_967_camisetawilljackfrente1b448a0ec37209a24611623266859463310241024.jpg?v=1722444852" }}
        className="w-full h-96">
      </Image>

      <Text className='font-bold text-3xl ml-4'>
        Produto Excepcional
      </Text>

      <Text className='font-bold text-1 xl text-gray-400 ml-4 mt-4'>
        Este produto foi criado com material de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade.
      </Text>

      <Text className='font-bold text-2xl text-green-400 ml-4 mt-4'>
        R$ 299,00
      </Text>

      <TouchableOpacity className="items-center bg-blue-700 w-96 p-3 ml-4 mt-4 rounded-full">
        <Text className=" text-white text-lg font-bold">
          Comprar Agora
        </Text>
      </TouchableOpacity>

    </View>
    
  );
}