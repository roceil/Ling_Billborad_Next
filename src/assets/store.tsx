import { create } from 'zustand'

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
