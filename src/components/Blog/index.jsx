import './style.css'
import Filter from '../Filter'
import { useState } from 'react'
import Row from '../Row'
export default function Blog(props) {
  let data = props.data
  const [filtered, setFiltered] = useState(data)
  const createRow = (i) => {
    let row = []
    if(filtered[i])row.push(filtered[i])
    if(filtered[i+1])row.push(filtered[i+1])
    if(filtered[i+2])row.push(filtered[i+2])
    if(filtered[i+3])row.push(filtered[i+3])
    return <Row key={i} row={row} />
  }
  const func = (tag) => {
    let arr = []
    if (tag == 'All') {
      arr = data
    }
    else {
      for (let i of data) {
        for (let t of i.tags) {
          if (t == tag) {
            arr.push(i)
          }
        }
      }
    }
    setFiltered(arr)
    filtered.map((e, i) => { if ((i) % 4 == 0) return createRow(i) })
  }

  return <div className='blog'>
    <p className='popular_topics'>Popular topics</p>
    <Filter func = {func}/>
    <div className='contanier_row'>
      {data.map((e, i) => { if ((i) % 4 == 0) return createRow(i) })}
    </div>
  </div>
}