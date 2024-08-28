import { products } from '#/constants/uidata/products'
import { useLocalSearchParams } from 'expo-router'
import { Image, View } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()
  const { name, image: uri, price } = products.find(product => product.id == id)

  return (
    <View className="flex-1 p-[10px] bg-white">
      <Image source={{ uri }} style={{ width: '100%', aspectRatio: 1 }} />
    </View>
  )
}
