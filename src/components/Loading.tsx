import { useState } from 'react'
import { useLoadingStore } from '@/assets/store'

export default function Loading() {
  const loading = useLoadingStore(state => state.loading)

  return (
    <div
      style={{
        display: loading ? 'none' : 'flex',
      }}
      className='fixed top-0 w-full h-full flex justify-center items-center bg-gray-400/50'
    >
      <div
        id='fountainTextG'
        className='flex justify-center items-center'
      >
        <div
          id='fountainTextG_1'
          className='fountainTextG'
        >
          L
        </div>
        <div
          id='fountainTextG_2'
          className='fountainTextG'
        >
          o
        </div>
        <div
          id='fountainTextG_3'
          className='fountainTextG'
        >
          a
        </div>
        <div
          id='fountainTextG_4'
          className='fountainTextG'
        >
          d
        </div>
        <div
          id='fountainTextG_5'
          className='fountainTextG'
        >
          i
        </div>
        <div
          id='fountainTextG_6'
          className='fountainTextG'
        >
          n
        </div>
        <div
          id='fountainTextG_7'
          className='fountainTextG'
        >
          g
        </div>
      </div>
    </div>
  )
}
