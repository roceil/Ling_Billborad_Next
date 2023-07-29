import ButtonGroup from '@/containers/ButtonGroup'
import ItemsList from '@/containers/ItemsList'

export default function Home() {
  return (
    <main>
      {/* <!-- 按鈕區塊 --> */}
      <ButtonGroup />

      {/* 列表區塊 */}
      <ItemsList />
    </main>
  )
}
