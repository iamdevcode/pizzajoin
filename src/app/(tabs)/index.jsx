import products from '#/data/products'
import { Card } from '@/components/Card'
import { FlatList, StatusBar } from 'react-native'

export default function HomeView() {
  return (
    <FlatList
      style={{ marginTop: StatusBar.currentHeight }}
      data={products}
      renderItem={({ item, index }) => <Card key={index} product={item} />}
    />
  )
}
