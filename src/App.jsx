import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('violet');
  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Violet", value: "violet" },
    { name: "Orange", value: "orange" },
    { name: "Yellow", value: 'yellow' }
  ]
  return (
    <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
      <h1 className='fixed flex flex-wrap justify-center inset-x-0 text-3xl p-2'>Background Changer App</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl'>
          {
            colors.map((c) =>
              <button
                key={c.name}
                onClick={() => setColor(c.value)}
                className='outline-none px-4 border'
                style={{ backgroundColor: c.value }}
              >
                {c.name}
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
