import react,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/car'
import Student from './components/student'
import Football from './components/shoot'
import FavoriteColor from './hooks/Hook_useState'
import Welcome from './Welcome'
import FunctionalComponents from './FunctionalComponents'
import ClassComponents from './ClassComponnets'
import EventHandler from './EventHandler'
import Counter from './StateManagemnet'
import Navbar from './UseEffect/NavBar'
import DataFetchingComponent from './DataFetchingComponent'
import FormComponent from './FormComponent'

function App() {
    const[color, setcolor] = useState(0)
    const[count, setcount] = useState(0)
    useEffect(() => {
      alert("count was changed")
      setcolor(color+1)
    }, [count])
  return (
    <> 
    <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
      <Car brand="suziki" color= "white"/>
      <Student name="Ajinkya" branch= "CSE" city="nanded"/>
      <Football/>
      <FavoriteColor/>
      <Welcome/>
      <ClassComponents/>
      <FunctionalComponents/>
      <EventHandler/>
      <Counter/>
      {/* <Navbar color={"navy " + "blue " + color}/> */}
      {/* <DataFetchingComponent/> */}
      <FormComponent/>

    </>
  )
}

export default App
