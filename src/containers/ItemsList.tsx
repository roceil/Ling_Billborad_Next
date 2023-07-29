import { useState, useRef } from 'react'
import Swal from 'sweetalert2'
import { saleItems } from '@/assets/fakeData'
import { useEditPriceStore } from '@/assets/store'

// 定義 saleItems 的型別
type SaleItem = {
  id: number
  name: string
  price: number
  editing: boolean
}

export default function ItemsList() {
  const editPriceStatus = useEditPriceStore(state => state.editPrice)
  const [renderData, setRenderData] = useState<SaleItem[]>(saleItems)
  const inputRef = useRef<HTMLInputElement>(null)

  // ====== 更改價格 ======
  const editHandler = (item: SaleItem) => {
    setRenderData(prev =>
      prev.map(prevItem =>
        prevItem.id === item.id
          ? {
              ...prevItem,
              editing: !prevItem.editing,
            }
          : prevItem,
      ),
    )
  }

  // ====== 確認價格 ======
  const confirmHandler = (item: SaleItem) => {
    const inputValue = inputRef.current?.value

    if (inputValue) {
      setRenderData(prev =>
        prev.map(prevItem =>
          prevItem.id === item.id
            ? {
                ...prevItem,
                price: Number(inputValue),
                editing: !prevItem.editing,
              }
            : prevItem,
        ),
      )
    }
  }

  // ====== 刪除種類 ======
  const deleteItemModal = (item: SaleItem) => {
    Swal.fire({
      title: '確認刪除？',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '確認刪除',
      cancelButtonText: '取消',
    }).then(result => {
      if (result.isConfirmed) {
        deleteHandler(item)
        Swal.fire({
          title: '刪除成功',
          text: '1秒後自動關閉',
          timer: 1000,
        })
      }
    })
  }

  // ====== 確認刪除 ======
  const deleteHandler = (item: SaleItem) => {
    setRenderData(prev => prev.filter(prevItem => prevItem.id !== item.id))
  }

  // ====== 編輯價格切換（待移出） ======
  const EditablePrice: React.FC<{ price: number; editing: boolean }> = ({
    price,
    editing,
  }) => {
    return editing ? (
      <input
        ref={inputRef}
        placeholder={price.toString()}
        type='tel'
        className='font-bold inline-block rounded-lg w-10 border-2 border-black focus:outline-none px-1.5 py-0.5'
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
            className='text-gray-700 mb-5 border-b-2 border-gray-300 pb-2 '
          >
            {/* 項目名稱 */}
            <div className='flex space-x-5 items-center justify-between mt-2 min-h-[40px]'>
              <h3 className='p-1.5 font-medium bg-slate-200 rounded-sm text-xl inline-block'>
                {item.name}
              </h3>
              {/* 價格區塊 */}
              <div className='text-lg flex items-center'>
                NT$：
                <EditablePrice
                  price={item.price}
                  editing={item.editing}
                />
              </div>
            </div>

            {/* 更改按鈕 */}
            <div
              className={` space-x-2 mt-2 ${
                editPriceStatus ? 'flex' : 'hidden'
              }`}
            >
              <button
                type='button'
                onClick={() => editHandler(item)}
                className={`bg-slate-400 py-2 px-3 w-1/2 rounded-lg text-white ${
                  item.editing ? '!hidden' : '!block'
                }`}
              >
                更改
              </button>
              <button
                type='button'
                onClick={() => deleteItemModal(item)}
                className={`bg-red-500 py-2 px-3 w-1/2 rounded-lg text-white ${
                  item.editing ? '!hidden' : '!block'
                }`}
              >
                刪除
              </button>
            </div>

            {/* 確認按鈕 */}
            <div
              className={`space-x-2  mt-2 ${item.editing ? 'flex' : 'hidden'}`}
            >
              <button
                type='button'
                onClick={() => confirmHandler(item)}
                className='bg-emerald-400 py-2 px-3 w-1/2 rounded-lg text-white'
              >
                確認
              </button>

              <button
                type='button'
                onClick={() => editHandler(item)}
                className='bg-rose-400 py-2 px-3 w-1/2 rounded-lg text-white'
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
