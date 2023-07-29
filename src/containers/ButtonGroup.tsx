import { useEditPriceStore, useCreateModalStore } from '@/assets/store'
import CustomButton from '@/components/CustomButton'

export default function ButtonGroup() {
  const editPriceStatus = useEditPriceStore(state => state.editPrice)
  const editPriceStatusFn = useEditPriceStore(state => state.editPriceStatus)
  const setOpen = useCreateModalStore(state => state.setOpen)

  return (
    <div className='container mt-2'>
      <div className='flex justify-center items-center space-x-2'>
        <CustomButton
          text='新增種類'
          color='blue'
          clickHandler={() => setOpen(true)}
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
