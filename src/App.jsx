import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Edit from './Home/edit'
import List from './Home/list'

function App() {

  const [data,setData] = useState([]) //在父層，給Edit和 List共用State
  return (
    <div className='app'>
    <Edit add={setData}/>      
    <List listData={data}/>  
    </div>

  )
  
}



export default App
