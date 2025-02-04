import { useState } from 'react'

import Props from './Props'
import Bgcolor from './Bgcolor'
import Password from './Password'
import Github from './Github'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    if (count == 20) return
    setCount(count + 1)
  }
  function decrement(){
    if(count === 0) return
    setCount(count - 1)
  }

  return (
    <>
     {/* <div className="">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
     </div> */}
  

     {/* <Props title="React" image='https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600' description="A JavaScript library for building user interfaces." />
     <Props title="React" image='https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600' description="A JavaScript library for building user interfaces." /> */}
     {/* <Bgcolor/>
     <Password/>
     <Github/> */}
     <Todo/>
    
    </>
  )
}

export default App
