import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";

interface ProdutosDados {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function App() {
  const [produtos, setProdutos] = useState<ProdutosDados[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#000" />
        <Text className="mt-2 text-gray-600">Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-center mb-4">🛍 Loja Virtual</Text>

      {produtos.map((produto) => (
        <View key={produto.id} className="bg-white rounded-2xl p-4 mb-4 shadow-md">
          <Image
            source={{ uri: produto.image }}
            className="w-full h-40 object-contain mb-2"
            resizeMode="contain"
          />
          <Text className="text-base font-semibold mb-1">{produto.title}</Text>
          <Text className="text-sm text-gray-500 mb-1">{produto.category}</Text>
          <Text className="text-green-600 font-bold text-lg">${produto.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
