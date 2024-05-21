import React from 'react'

export default function Ball({ n }) {
  const colorN = {
    'b0': 'bg-orange-300',
    'b1': 'bg-yellow-500',
    'b2': 'bg-yellow-700',
    'b3': 'bg-green-300',
    'b4': 'bg-green-500',
  }
  return (
    <div className={`inline-flex w-16 h-16 p-5
        justify-center items-center m-2
        text-4xl ${colorN['b' + Math.floor(n / 10)]}
        rounded-full text-white`}>
      {n}
    </div>
  )
}
