import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductCard({  }) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 w-[48%] shadow-md">
      <Image
        source={{ uri: product.image }}
        className="w-full h-32 object-contain mb-2"
        resizeMode="contain"
      />
      <Text className="text-base font-semibold mb-1" numberOfLines={2}>
        {product.title}
      </Text>
      <Text className="text-sm text-gray-500 mb-1">{product.category}</Text>
      <Text className="text-green-600 font-bold text-lg">${product.price}</Text>
    </View>
  );
}
