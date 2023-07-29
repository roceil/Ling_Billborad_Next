import { useEditPriceStore } from '@/assets/store'
import CustomButton from '@/components/CustomButton'

export default function ButtonGroup() {
  const editPriceStatus = useEditPriceStore(state => state.editPrice)
  const editPriceStatusFn = useEditPriceStore(state => state.editPriceStatus)

  return (
    <div className='container mt-2'>
      <div className='flex justify-center items-center space-x-2'>
        <CustomButton
          text='新增種類'
          color='blue'
        />
        <CustomButton
          text={editPriceStatus ? '關閉編輯' : '編輯價格'}
          color='red'
          clickHandler={editPriceStatusFn}
        />
      </div>
    </div>
  )
}
