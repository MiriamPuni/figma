import './style.css'
import Item from '../Item'
export default function Row(props) {
  return <div className='row'>
    {props.row.map(e=> <Item 
    key = {e.date}
    title = {e.title} 
    tags = {e.tags} 
    coverImage = {e.coverImage} 
    intro = {e.intro} 
    link = {e.link} 
    date = {e.date} 
    />)}
  </div>
}