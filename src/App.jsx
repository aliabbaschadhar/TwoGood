import React from 'react'
import { basil, alemais } from './assets/images';

function App() {
  return (
    <div>
      <h1 className='font-social-mono'>Hello World</h1>
      <h1 className='font-futura'>Hello World</h1>
      <h1 className='font-helvetica'>Hello World</h1>
      <h1 className='font-sans'>Hello World</h1>
      <img src={basil} alt="" />
      <img src={alemais} alt="" />
    </div>
  )
}

export default App;
