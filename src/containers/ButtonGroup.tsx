import CustomButton from '@/components/CustomButton'
export default function ButtonGroup({}) {
  return (
    <div className='container flex justify-center items-center space-x-2'>
      <CustomButton
        text='查詢價格'
        color='blue'
      />
      <CustomButton
        text='更改價格'
        color='red'
      />
    </div>
  )
}
