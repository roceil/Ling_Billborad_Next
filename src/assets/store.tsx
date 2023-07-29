import { create } from 'zustand'
import { saleItems } from '@/assets/fakeData'

// ====== 管理是否編輯價格的狀態 ======
interface editPrice {
  editPrice: boolean
  editPriceStatus: () => void
}

export const useEditPriceStore = create<editPrice>(set => ({
  editPrice: false,
  editPriceStatus: () =>
    set((state: { editPrice: boolean }) => {
      return { editPrice: !state.editPrice }
    }),
}))

// ====== 管理是否打開 modal 的狀態 ======
interface createModal {
  open: boolean
  setOpen: (open: boolean) => void
}
export const useCreateModalStore = create<createModal>(set => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}))

// ====== 管理清單的狀態 ======
interface SaleItem {
  id: number
  name: string
  price: number
  editing: boolean
}

export const useSaleItemsStore = create<{
  renderData: SaleItem[]
  editRenderData: (editItemId: number) => void
  confirmRenderData: (editItemId: number, inputValue: string) => void
  deleteSaleItem: (item: number) => void
  addSaleItem: (name: string, price: number) => void
}>(set => ({
  renderData: saleItems,

  // ====== 開啟編輯 ======
  editRenderData: (editItemId: number) => {
    // 當ID進來之後，要把該ID的editing改成true
    set(state => ({
      renderData: state.renderData.map(item =>
        item.id === editItemId
          ? {
              ...item,
              editing: !item.editing,
            }
          : item,
      ),
    }))
  },

  // ====== 確認編輯 ======
  confirmRenderData: (editItemId: number, inputValue: string) => {
    set(state => ({
      renderData: state.renderData.map(item =>
        item.id === editItemId
          ? {
              ...item,
              price: Number(inputValue),
              editing: !item.editing,
            }
          : item,
      ),
    }))
  },

  // ====== 刪除種類 ======
  deleteSaleItem: itemID => {
    set(state => ({
      renderData: state.renderData.filter(
        renderData => renderData.id !== itemID,
      ),
    }))
  },

  // ====== 新增種類 ======
  addSaleItem: (name, price) => {
    set(state => ({
      renderData: [
        ...state.renderData,
        {
          id: state.renderData.length + 1,
          name,
          price,
          editing: false,
        },
      ],
    }))
  },
}))
