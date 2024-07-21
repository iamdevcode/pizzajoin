import { Image, Text, View } from 'react-native'

export const Card = ({ product: { name, image: uri, price } }) => (
  <View className="gap-y-1 bg-white p-4 rounded-xl">
    <Image source={{ uri }} style={{ width: '100%', aspectRatio: 1 }} />
    <Text className="text-xl font-semibold">{name}</Text>
    <Text className="text-primary font-bold">${price}</Text>
  </View>
)
