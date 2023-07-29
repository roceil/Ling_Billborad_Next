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
      <header className='container pt-5'>
        <h1>新金鑫回收價目表</h1>
        <p className='text-center mt-2 text-3xl clockFont'>{date}</p>
      </header>
    </>
  )
}
