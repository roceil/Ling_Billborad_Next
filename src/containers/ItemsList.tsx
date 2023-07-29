import { useState, useRef } from 'react'
import { saleItems } from '@/assets/fakeData'

// 定義 saleItems 的型別
type SaleItem = {
  id: number
  name: string
  price: number
  editing: boolean
}

export default function ItemsList() {
  const [renderData, setRenderData] = useState<SaleItem[]>(saleItems)
  const inputRef = useRef<HTMLInputElement>(null)

  const editHandler = (item: SaleItem) => {
    setRenderData(prev =>
      prev.map(prevItem =>
        prevItem.id === item.id
          ? {
              ...prevItem,
              editing: !prevItem.editing,
              price: Number(inputRef.current?.value),
            }
          : prevItem,
      ),
    )
  }

  const EditablePrice: React.FC<{ price: number; editing: boolean }> = ({
    price,
    editing,
  }) => {
    return editing ? (
      <input
        ref={inputRef}
        placeholder={price.toString()}
        type='number'
        className='font-bold inline-block w-10'
      />
    ) : (
      <p>
        <span className='font-bold'>{price} </span>/ Kg
      </p>
    )
  }

  return (
    <div className='container mt-4'>
      <ul className='w-full h-[430px] bg-gray-50 rounded-2xl shadow-xl py-3 px-5 overflow-y-scroll'>
        {renderData.map(item => (
          <li
            key={item.id}
            className='text-gray-700 mb-5 border-b-2 border-gray-300 pb-2 flex justify-between items-center'
          >
            {/* 項目名稱 */}
            <div className='flex space-x-5 items-center'>
              <h3 className='p-1.5 font-medium bg-slate-200 rounded-sm text-xl'>
                {item.name}
              </h3>
              <div className='text-lg flex'>
                NT$：
                <EditablePrice
                  price={item.price}
                  editing={item.editing}
                />
              </div>
            </div>

            {/* 更改按鈕 */}
            <button
              type='button'
              onClick={() => editHandler(item)}
              className={`bg-slate-400 py-2 px-3 rounded-lg text-white ${
                item.editing ? '!hidden' : '!block'
              }`}
            >
              更改
            </button>

            <div className={`space-x-2 ${item.editing ? '!block' : '!hidden'}`}>
              <button
                type='button'
                onClick={() => editHandler(item)}
                className='bg-emerald-400 py-2 px-3 rounded-lg text-white'
              >
                確認
              </button>

              <button
                type='button'
                onClick={() => editHandler(item)}
                className='bg-rose-400 py-2 px-3 rounded-lg text-white'
              >
                取消
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
