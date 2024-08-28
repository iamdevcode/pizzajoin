import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity } from 'react-native'

export const Card = ({ product: { name, image: uri, price, id } }) => (
  <Link href={`/product/${id}`} asChild>
    <TouchableOpacity className="bg-white p-2 rounded-md flex-1">
      <Image
        source={{ uri }}
        style={{ width: '100%', aspectRatio: 1 }}
        resizeMode="contain"
      />
      <Text className="text-base font-semibold">{name}</Text>
      <Text className="text-primary font-bold">${price}</Text>
    </TouchableOpacity>
  </Link>
)
