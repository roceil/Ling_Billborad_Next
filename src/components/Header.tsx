import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

export default function Header() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateDate = () => {
      setDate(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    }

    // 初始化時間
    updateDate()

    // 每秒更新時間
    const dateUpdate = setInterval(updateDate, 1000)

    // 清除計時器
    return () => {
      clearInterval(dateUpdate)
    }
  }, [])

  return (
    <>
      <header className='container py-8'>
        <h1>不知道叫什麼名字</h1>
        <p className='text-center mt-2 text-lg'>{date}</p>
      </header>
    </>
  )
}
