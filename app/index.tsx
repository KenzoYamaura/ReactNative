import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-white">

      <Text className="bg-blue-700 font-bold text-white p-3 text-lg">
        Dashboard
      </Text>
      <View className='flex-row items-center justify-between px-2 mt-2'>
        <View className="shadow-xl rounded-2xl p-4 mb-5">
          <Text className="text-black font-bold text-1xl">
            Visitas
          </Text>

          <Text className='text-blue-700 font-bold text-3xl'>
            1,500
          </Text>

          <Text className="text-gray-400 text-1xl">
            Últimais 7 dias
          </Text>
        </View>

        <View className="shadow-xl rounded-2xl p-4 mb-5">
          <Text className="text-black font-bold text-1xl">
            Vendas
          </Text>

          <Text className='text-green-700 font-bold text-3xl'>
            320
          </Text>

          <Text className="text-gray-400 text-1xl">
            Últimais 7 dias
          </Text>
        </View>

        <View className="shadow-xl rounded-2xl p-4 mb-5">
          <Text className="text-black font-bold text-1xl">
            Novos Usuários
          </Text>

          <Text className='text-orange-700 font-bold text-3xl'>
            120
          </Text>

          <Text className="text-gray-400 text-1xl">
            Últimais 7 dias
          </Text>
        </View>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="shadow-xl m-3 rounded-3xl">
          <Image source={{ uri: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/31/13_54_06_685_13_7_9_967_camisetawilljackfrente1b448a0ec37209a24611623266859463310241024.jpg?v=1722444852" }}
            className="w-full h-96">
          </Image>

          <Text className='font-bold text-3xl ml-4'>
            Produto Excepcional
          </Text>

          <Text className='font-bold text-1xl text-gray-500 ml-4 mt-4'>
            Este produto foi criado com material de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade.
          </Text>

          <Text className='font-bold text-2xl text-green-400 ml-4 mt-4'>
            R$ 299,00
          </Text>

          <TouchableOpacity className="items-center bg-blue-700 w-auto p-3 m-4 rounded-full">
            <Text className=" text-white text-lg font-bold">
              Comprar Agora
            </Text>
          </TouchableOpacity>
        </View>

        <View className="shadow-xl m-3 rounded-3xl">
        <Image source={{ uri: "https://cdn.vnda.com.br/1036x/brutalkill/2025/03/26/18_05_12_823_18_3_3_393__0007_camiseta20oversized2020oblivion20grey.jpg?v=1743023117" }}
          className="w-full h-96">
        </Image>

        <Text className='font-bold text-3xl ml-4'>
          Produto Excepcional
        </Text>

        <Text className='font-bold text-1xl text-gray-500 ml-4 mt-4'>
          Este produto foi criado com material de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade.
        </Text>

        <Text className='font-bold text-2xl text-green-400 ml-4 mt-4'>
          R$ 299,00
        </Text>

        <TouchableOpacity className="items-center bg-blue-700 w-auto p-3 m-4 rounded-full">
          <Text className=" text-white text-lg font-bold">
            Comprar Agora
          </Text>
        </TouchableOpacity>
        </View>

        <View className="shadow-xl m-3 rounded-3xl">
        <Image source={{ uri: "https://cdn.vnda.com.br/1036x/brutalkill/2024/07/26/14_51_00_950_camiseta-rider-011-3c4ea7c5e70edea6b816933536516498-1024-1024.jpg?v=1725205542" }}
          className="w-full h-96">
        </Image>

        <Text className='font-bold text-3xl ml-4'>
          Produto Excepcional
        </Text>

        <Text className='font-bold text-1xl text-gray-500 ml-4 mt-4'>
          Este produto foi criado com material de alta qualidade, visando sempre o conforto e a durabilidade. É perfeito para quem busca praticidade.
        </Text>

        <Text className='font-bold text-2xl text-green-400 ml-4 mt-4'>
          R$ 299,00
        </Text>

        <TouchableOpacity className="items-center bg-blue-700 w-auto p-3 m-4 rounded-full">
          <Text className=" text-white text-lg font-bold">
            Comprar Agora
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

    </View>

  );
}
