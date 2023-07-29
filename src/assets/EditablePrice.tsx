type editablePriceProps = {
  price: number
  editing: boolean
  inputRef: React.RefObject<HTMLInputElement>
}

export default function EditablePrice({
  price,
  editing,
  inputRef,
}: editablePriceProps) {
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
        className='font-bold inline-block rounded-lg w-[70px] border-2 border-black focus:outline-none px-1.5 py-0.5'
      />
    ) : (
      <p>
        <span className='font-bold'>{price} </span>/ Kg
      </p>
    )
  }
  return (
    <EditablePrice
      price={price}
      editing={editing}
    />
  )
}
