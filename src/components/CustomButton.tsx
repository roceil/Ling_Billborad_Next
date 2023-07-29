type CustomButtonProps = {
  text: string
  color: string
}

export default function CustomButton({ text, color }: CustomButtonProps) {
  const switchColor =
    color === 'blue'
      ? 'from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/50 '
      : ' from-red-400 via-red-500 to-red-600 shadow-red-500/50'

  return (
    <button
      type='button'
      className={`${switchColor} text-white bg-gradient-to-r hover:bg-gradient-to-br focus:outline-none shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
    >
      {text}
    </button>
  )
}
