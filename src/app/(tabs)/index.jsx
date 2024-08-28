import { products } from '#/constants/uidata/products'
import { Card } from '@/components/Card'
import { FlatList } from 'react-native'

export default function HomeView() {
  return (
    <FlatList
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 6 }}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={products}
      renderItem={({ item, index }) => <Card key={index} product={item} />}
    />
  )
}
