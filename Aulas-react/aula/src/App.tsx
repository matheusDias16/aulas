//import { useState } from 'react'
import './App.css'
import { List, TObj } from './components/List'

export default function App() {
  //const [count, setCount] = useState(0)

  const listData = [
    {
      name: 'André',
      age:32
    },
    {
      name: 'Júlia',
      age:21
    },
    {
      name: 'João',
      age:25
    },
    {
      name: 'Gabriela',
      age:24
    },
    {
      name: 'Luiza',
      age:15
    },
    {
      name: 'José',
      age:32
    }
  ]
  
  function showData(data: TObj) {
    console.log('Pessoa escolhida', data);
  }
  
  
  return (
    <>
      <List listReceived={listData} handleClick={(person: TObj) => showData(person)} />
    </>
  )
}


