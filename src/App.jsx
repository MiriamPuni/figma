import './App.css'
import data from './data.json'
import Titele from './components/Titele'
import Blog from './components/Blog'

export default function App() {


  return <div>
    <Titele/>
    <Blog data = {data}/>
  </div>
}